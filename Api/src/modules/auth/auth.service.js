import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import userService from '../user/user.service.js';

const generateToken = (sub) => {

    const payload = {
        iss: process.env.JWT_ISSUER,
        aud: process.env.JWT_AUDIENCE,
        iat: Math.floor(Date.now() / 1000),
        data: {
            sub,
        },
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        algorithm: process.env.JWT_ALGORITHM
    });


    return token;
    
};

const validateToken = (token) => {
    try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [process.env.JWT_ALGORITHM],
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE
        });

        return tokenDecoded;

    } catch (error) {
        console.error('Error in validateToken:', error);
        return null;
    }
};

const comparePasswords = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
};

const hashPassword = async (password) => {
    try {
        const saltRounds = 10; 
        if (!password) throw new Error('Password is required'); 
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Error hashing password');
    }
};

const preLogin = async (data) => {
    try {
        const user = await userService.getUser(data.phoneNumber);
        if (user === 'No user found') return 'No user found'; 

        const passwordMatch = await comparePasswords(data.pin, user.pin);
        if (!passwordMatch) return 'Invalid password';

        const temporarySmsCode = String(Math.floor(1000 + Math.random() * 9000));

        const updatedUser = await userService.updateUser(user.phoneNumber, { temporarySmsCode });
        if (updatedUser !== 'Updated user') return 'Error sending SMS code'; 

        console.log(`Temporary SMS code: ${temporarySmsCode}`);

        return 'SMS code sent';
    } catch (error) {
        console.error('Error in preLogin:', error);
        return 'Internal server error';
    }
};

const login = async (data) => {
    try {
        const user = await userService.getUser(data.phoneNumber);

        if (!user) return 'No user found';

        if(!user.temporarySmsCode) return 'No SMS code sent';

        const updateResponse = await userService.updateUser(user.phoneNumber, { temporarySmsCode: '' });
        
        if (!updateResponse) return 'Error updating user' ;

        return token;
    } catch (error) {
        return 'Internal server error' ;
    }
};

const preRegister = async (data) =>{
    try {
        const user = await userService.getUser(data.phoneNumber);
        if (user !== 'No user found') return 'User already exists';

        const hashedPassword = await hashPassword(data.pin);

        const newUser = {
            ...data,
            pin: hashedPassword,
            temporarySmsCode: String(Math.floor(1000 + Math.random() * 9000)),
        };

        const createdUser = await userService.createUser(newUser);

        if (createdUser === 'Error creating user') return 'Error creating user';

        console.log(`Temporary SMS code: ${newUser.temporarySmsCode}`);

        return 'SMS code sent';
    } catch (error) {
        console.error('Error in preRegister:', error);
        return 'Internal server error';
    }
}

const register = async (data) => { 

    try {
        const user = await userService.getUser(data.phoneNumber);
        if (!user) return 'No user found';

        if (!user.temporarySmsCode) return 'No SMS code sent';

        if (data.temporarySmsCode !== user.temporarySmsCode) return 'Invalid SMS code';

        const updatedUser = await userService.updateUser(user.phoneNumber, { temporarySmsCode: '' });
        
        if (updatedUser === 'Error updating user') return 'Error updating user';

        const token = generateToken(user.phoneNumber);

        return token;
    } catch (error) {
        console.error('Error in register:', error);
        return 'Internal server error';
    }
};

export default {
    generateToken,
    validateToken,
    comparePasswords,
    hashPassword,
    preLogin,
    login,
    preRegister,
    register
};
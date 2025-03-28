import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import userService from '../user/user.service.js';

const generateToken = (id) => {

    const payload = {
        iss: process.env.JWT_ISSUER,
        aud: process.env.JWT_AUDIENCE,
        iat: Math.floor(Date.now() / 1000),
        data: {
            sub: id,
        },
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
        algorithm: process.env.JWT_ALGORITHM
    });

    console.log('token', token);

    return token;
    
};

const validateToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [process.env.JWT_ALGORITHM],
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE
        });
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
        if (!user) return { error: 'No user found' };
        console.log('response', user);

        const passwordMatch = await comparePasswords(data.pin, user.pin);
        if (!passwordMatch) return { error: 'Invalid password' };

        const temporarySmsCode = String(Math.floor(1000 + Math.random() * 9000));

        const updatedUser = await userService.updateUser(user.phoneNumber, { temporarySmsCode });
        if (!updatedUser) return { error: 'Error sending SMS code' };

        console.log(`Temporary SMS code: ${temporarySmsCode}`);
        return { success: 'SMS code sent' };
    } catch (error) {
        return { error: 'Internal server error' };
    }
};

const login = async (data) => {
    try {
        const user = await userService.getUser(data.phoneNumber);
        if (!user) return { error: 'No user found' };

        console.log('response', user);

        if (user.temporarySmsCode !== data.temporarySmsCode) return { error: 'Invalid SMS code' };

        const updateResponse = await userService.updateUser(user.phoneNumber, { temporarySmsCode: '' });

        console.log('responseU', updateResponse);
        
        if (!updateResponse) return { error: 'Error updating user' };

        const token = generateToken(user.userSub);
        console.log('token', token);
        return token;

    } catch (error) {
        return { error: 'Internal server error' };
    }
};


const register = async (data) => { 

    const user = await userService.createUser(data);

    if (user === 'User already exists') return 'User already exists';

    if (user === 'Error creating user') return 'Error creating user';

    return 'User created';
};

export default {
    generateToken,
    validateToken,
    comparePasswords,
    hashPassword,
    preLogin,
    login,
    register
};
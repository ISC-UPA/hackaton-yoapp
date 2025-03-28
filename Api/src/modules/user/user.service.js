import User from '../../models/user.model.js';
import authService from '../auth/auth.service.js';

const getUser = async (phoneNumber) => {
    try {

        const user = await User.findOne({phoneNumber});

        if (!user) return 'No user found';

        return {
            phoneNumber: user.phoneNumber,
            pin: user.pin,
            temporarySmsCode: user.temporarySmsCode,
        };
    } catch (error) {
        console.log('error', error);
        return 'No user found';
    }   
};

const createUser = async (user) => {
    try {

        const userExists = await getUser(user.phoneNumber);

        if (userExists !== 'No user found') return 'User already exists';

        console.log('user', user.pin);

        console.log('user*************************');

        user.pin = await authService.hashPassword(user.pin);

        const newUser = new User(user);
        const response = await newUser.save();

        return {
            phoneNumber: response.phoneNumber
        };
    } catch (error) {
        console.log('error', error);
        return 'Error creating user';
    }
};

const updateUser = async (phoneNumber, data) => {
    try {

        const user = await getUser(phoneNumber);

        if (user === 'No user found') return 'No user found';

        const response = await User.findOneAndUpdate({phoneNumber}, data, {new: true});
    
        if (!response) return 'Error updating user';

        return 'Updated user';
    } catch (error) {
        return 'Error updating user';
    }
}

export default {
    createUser,
    getUser,
    updateUser,
};
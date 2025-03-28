import authService from "./auth.service.js";

const responseErros = ['No user found', 'Invalid password', 'Error sending SMS code', 'Invalid SMS code', 'User already exists', 'Error creating user'];

const preLogin = (req, res) => {

    const data = req.body;
    const response = authService.preLogin(data);

    console.log('response', response);

    if(responseErros.includes(response)) return res.status(400).json({ error: response });
    
    return res.status(200).json({ smsCode: response });

};

const login = (req, res) => {
    const data = req.body;
    const response = authService.login(data);

    if(responseErros.includes(response)) {
        return res.status(400).json({ error: response });
    }

    return res.status(200).json({ token: response });
}


export default {
    preLogin,
    login
};
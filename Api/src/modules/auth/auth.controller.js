import authService from "./auth.service.js";

const responseErros = [
    'No user found',
    'User not found',
    'User Already exists',
    'Invalid password',
    'User not verified'
];

const preLogin = async (req, res) => {

    const data = req.body;
    const response = await authService.preLogin(data);
    if(response != 'SMS code sent') return res.status(400).json({ error: response });
    
    return res.status(200).json({ smsCode: response });
};

const login = async (req, res) => {
    const data = req.body;
    const response = await authService.login(data);

    if(responseErros.includes(response)) return res.status(400).json({ error: response });
    
    return res.status(200).json({ token: response });
};

const preRegister = async (req, res) => {
    const data = req.body;
    const response = await authService.preRegister(data);

    if(responseErros.includes(response)) return res.status(400).json({ error: response });
    
    return res.status(200).json({ smsCode: response });
};

const register = async (req, res) => {
    const data = req.body;
    const response = await authService.register(data);

    if(responseErros.includes(response)) return res.status(400).json({ error: response });
    
    return res.status(200).json({ token: response });
};


export default {
    preLogin,
    login,
    preRegister,
    register
};
function validateNewUser(req, res, next) {
    const { phoneNumber, pin} = req.body;

    if (!phoneNumber || !pin) return res.status(400).json({ error: 'All fields are required' });

    next();
}

function validateUpdateUser(req, res, next) {
    const { phoneNumber, pin, Name, temporarySmsCode } = req.body;

    if (!phoneNumber) return res.status(400).json({ error: 'Phone number is required' });
    if (!pin && !Name && !temporarySmsCode) return res.status(400).json({ error: 'At least one field is required' });
    
    next();
}

export default {
    validateNewUser,
    validateUpdateUser
};
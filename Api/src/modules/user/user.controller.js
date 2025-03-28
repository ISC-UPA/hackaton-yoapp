import userService from "./user.service.js";

const getUser = async (req, res) => {
    const phoneNumber = req.params.phoneNumber;

    const response = await userService.getUser(phoneNumber);

    if (response === 'No user found') return res.status(404).json({ error: response });

    res.send(response);

};

const createUser = async (req, res) => {
    const response = await userService.createUser(req.body);

    if(response === 'User already exists') return res.status(400).json({error: 'User already exists'});

    if (response === 'Error creating user') return res.status(500).json({error: response});

    res.status(201).json(response);
};

const updateUser = async (req, res) => {
    const response = await userService.updateUser(req.params.phoneNumber, req.body);
    
    if (response === 'No user found') return res.status(404).json({error: response});

    if (response === 'Error updating user') return res.status(500).json({error: response});
    
    res.status(200).json({ message: response });
};

export default {
    getUser,
    createUser,
    updateUser,
};
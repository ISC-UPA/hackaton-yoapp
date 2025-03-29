function validateNewCard(req, res, next) {
    const { cardNumber, assignedTo, phoneNumber } = req.body;

    if (!cardNumber, assignedTo, phoneNumber) return res.status(400).json({ error: 'All fields are required' });
    
    next();
}


function validateUpdateCard(req, res, next) {
    const {assignedTo, phoneNumber, cardbalance } = req.body;

    const cardNumber = req.params.cardNumber;

    if (!cardNumber) return res.status(400).json({ error: 'Card number is required' });
    
    if (!phoneNumber && !assignedTo  && !cardbalance) return res.status(400).json({ error: 'At least one field is required' });
    
    next();
}

export default {
    validateNewCard,
    validateUpdateCard,
};
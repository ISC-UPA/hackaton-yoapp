import cardsService from './card.service.js';

const getCards = async (req, res) => {

    if (!req.body.phoneNumber) return res.status(400).json({error: 'Phone number is required'});
    console.log(req.body.phoneNumber);
    const response = await cardsService.getCards(req.body.phoneNumber);

    if (response === 'No cards found') return res.status(404).json({error: 'No cards found'});

    res.status(200).json(response);
};

const getCard = async (req, res) => {
    const cardNumber = req.params.cardNumber;

    const response = await cardsService.getCard(cardNumber);
    
    if (response === 'No card found') return res.status(404).json({ error: response });

    res.send(response);

};

const createCard = async (req, res) => {
    const response = await cardsService.createCard(req.body);

    if (response === 'Card already exists') return res.status(409).json({error: response});

    if (response === 'Error creating card') return res.status(500).json({error: response});
    
    res.status(201).json(response);
};

const updateCard = async (req, res) => {
    const response = await cardsService.updateCard(req.params.cardNumber, req.body);
    
    if (response === 'No card found') return res.status(404).json({error: response});

    if (response === 'Error updating card') return res.status(500).json({error: response});
    
    res.status(200).json({ message: response });
};

const rechargeCard = async (req, res) => {
    const response = await cardsService.rechargeCard(req.params.cardNumber, req.body);
    
    if (response === 'No card found') return res.status(404).json({error: response});

    if (response === 'Error updating card') return res.status(500).json({error: response});
    
    res.status(200).json({ message: response });
};

const payCard = async (req, res) => {
    console.log(req.body);
    const response = await cardsService.payCard(req.params.cardNumber, req.body);
    
    if (response === 'No card found') return res.status(404).json({error: response});

    if (response === 'Error updating card') return res.status(500).json({error: response});
    
    res.status(200).json({ message: response });
};

const deleteCard = async (req, res) => {

    const response = await cardsService.deleteCard(req.params.cardNumber);

    if (response === 'No card found') return res.status(404).json({error: response});

    if (response === 'Error deleting card') return res.status(500).json({error: response});

    res.status(200).json({ message: 'Card deleted' });
}

export default { 
    getCards,
    getCard,
    createCard,
    updateCard,
    deleteCard,
    rechargeCard,
    payCard
};
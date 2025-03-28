import bankCardService from "./bank-card.service.js";

const getBankCards = async (req, res) => {
    try {
        const bankCards = await bankCardService.getBankCards(req.user.email);

        if (bankCards === 'No bank cards found') return res.status(404).json({message: 'No bank cards found'});

        res.status(200).json(bankCards);
    } catch (error) {
        res.status(500).json({message: 'Error getting bank cards'});
    }
};

const getBankCard = async (req, res) => {
    try {
        const bankCard = await bankCardService.getBankCard(req.params.cardId);

        if (bankCard === 'No bank card found') return res.status(404).json({message: 'No bank card found'});

        res.status(200).json(bankCard);
    } catch (error) {
        res.status(500).json({message: 'Error getting bank card'});
    }
};

const createBankCard = async (req, res) => {
    try {
        const response = await bankCardService.createBankCard({...req.body, email: req.user.email});

        if (response === 'Error creating bank card') return res.status(500).json({message: 'Error creating bank card'});

        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message: 'Error creating bank card'});
    }
};

const updateBankCard = async (req, res) => {
    try {
        const response = await bankCardService.updateBankCard(req.params.cardId, req.body);

        if (response === 'No bank card found') return res.status(404).json({message: 'No bank card found'});
        if (response === 'Error updating bank card') return res.status(500).json({message: 'Error updating bank card'});

        res.status(200).json({message: 'Updated bank card'});
    } catch (error) {
        res.status(500).json({message: 'Error updating bank card'});
    }
};

const deleteBankCard = async (req, res) => {
    try {
        const response = await bankCardService.deleteBankCard(req.params.cardId);

        if (response === 'No bank card found') return res.status(404).json({message: 'No bank card found'});

        res.status(200).json({message: 'Deleted bank card'});
    } catch (error) {
        res.status(500).json({message: 'Error deleting bank card'});
    }
};

export default {
    getBankCards,
    getBankCard,
    createBankCard,
    updateBankCard,
    deleteBankCard,
};
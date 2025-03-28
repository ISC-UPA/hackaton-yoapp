function validateNewBus(req, res, next) {
    const {
        type,
        latitude,
        longitude
    } = req.body;

    if (!type || !latitude || !longitude) {
        return res.status(400).json({
            error: 'All fields are required'
        });
    }

    next();
}

function validateUpdateBus(req, res, next) {
    const {
        type,
        latitude,
        longitude
    } = req.body;

    if (!type && !latitude && !longitude) {
        return res.status(400).json({
            error: 'At least one field is required',
        });
    }
    next();
}

export default {
    validateNewBus,
    validateUpdateBus
};
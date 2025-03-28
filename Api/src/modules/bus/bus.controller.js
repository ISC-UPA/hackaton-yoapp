import busService from "./bus.service.js";

const getBuses = async (req, res) => {
    const response = await busService.getBuses();

    if (response === 'No buses found') return res.status(404).json({error: 'No buses found'});

    res.status(200).json(response);
};

const getBus = async (req, res) => {
    const busNumber = req.params.busNumber;

    const response = await busService.getBus(busNumber);
    
    if (response === 'No bus found') return res.status(404).json({ error: response });

    res.send(response);
};

const createBus = async (req, res) => {

    const bus = getBus(req.body.busNumber);

    if(bus) return res.status(400).json({error: 'Bus already exists'});

    const response = await busService.createBus(req.body);

    if (response === 'Error creating bus') return res.status(500).json({error: response});
    

    res.status(201).json(response);
};

const updateBus = async (req, res) => {
    const response = await busService.updateBus(req.params.busNumber, req.body);
    
    if (response === 'No bus found') return res.status(404).json({error: response});

    if (response === 'Error updating bus') return res.status(500).json({error: response});
    
    res.status(200).json({ message: response });
}; 

export default {
    getBuses,
    getBus,
    createBus,
    updateBus,
};
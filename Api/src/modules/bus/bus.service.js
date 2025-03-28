import Bus from "../../models/bus.model.js";

const getBuses = async () => {
    try {

        const buses = await Bus.find();

        if (!buses.length) return 'No buses found';
        
        return buses;
    } catch (error) {
        console.log('error', error);
        return 'No buses found';
    }
};

const getBus = async (busNumber) => {
    try {

        const bus = await Bus.findById(busNumber);

        if (!bus) return 'No bus found';
        
        return bus;
    } catch (error) {
        console.log('error', error);
        return 'No bus found';
    }
};

const createBus = async (data) => {
    try {

        const bus = new Bus(data);
        const response = await bus.save();

        return response;
    } catch (error) {
        console.log('error', error);
        return 'Error creating bus';
    }
};

const updateBus = async (busNumber, data) => {
    try{

        const bus = await getBus(busNumber);

        if(bus === 'No bus found') return 'No bus found';

        const response = await Bus.findOneAndUpdate({busNumber}, data, {new: true});

        if (!response) return 'Error updating bus';

        return "Updated bus";
    } catch (error) {
        return 'Error updating bus';
    }
}

export default {
    createBus,
    getBus,
    getBuses,
    updateBus,
};
import PaymentHistorySchema from '../../models/payment.model.js';

const getPaymentHistory = async (email) => { 
    try {

        const history = await PaymentHistorySchema.find({email: email});
        if (!history) return "No payment history found";
        
        return history;
    }
    catch (error) {
        return error;
    }
};

const addPayment = async (data) => {
    try {
        const payment = new PaymentHistorySchema(data);
        await payment.save();

        if (!payment) return "Payment not added";

        return "Payment added successfully";
    }
    catch (error) {
        return error;
    }
};

export default {
    getPaymentHistory,
    addPayment
};
const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    patient: {
        type: String,
        required: true
    },
    documentType: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dentist: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Patient', patientSchema);
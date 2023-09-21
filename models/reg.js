const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    address: String,
});

module.exports = mongoose.model('Reg', regSchema);
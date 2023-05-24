const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        require: true,
        unique: true,
    },
    designation: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model("Employees", employeeSchema);
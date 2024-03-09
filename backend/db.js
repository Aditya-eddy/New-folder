const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jojosehrawat21:2nb82EUacxSpf9T7@cluster0.r4yw3jl.mongodb.net/EdTech');

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    image:{
        type: String,
    },
    dob: {
        type: String,
    }
});


const teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    image:{
        type: String,
    },
    dob: {
        type: String,
    }
});

const Student = mongoose.model("User", studentSchema);
const Teacher = mongoose.model("User", teacherSchema);

module.exports = {
	Student,
    Teacher,
};

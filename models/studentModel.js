const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category required'],
        unique: [true, 'category must be unique'],
        minlength: [3, 'too short category name'],
        maxlength: [30, 'too long category name'],
    },
    slug: {
        type: String,
        lowercase:true,    
    },
    image: String,
    age: String,
    email: String
},{timestamps:true}
)
const StudentModel = mongoose.model('Student', studentSchema)
module.exports = StudentModel

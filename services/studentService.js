const slugify = require('slugify')
const asyncHandler = require('express-async-handler')

const StudentModel = require('../models/studentModel')
exports.getStudents = asyncHandler(async (req, res) => {
    const students =  await StudentModel.find({})
    res.status(200)
    .json({results: students.length, data: students})
})


exports.getStudent = asyncHandler(async (req, res) => {
    const { id } = req.params
    const student = await StudentModel.findById(id)
    if (!student) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(200).json({data:student})
}

)


exports.createStudents = asyncHandler (async (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
        const student = await StudentModel.create({name, slug:slugify(name), age, email})
        res.status(201)
        .json({ data: student })
    
})

exports.updateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const student = await StudentModel.findOneAndUpdate({ _id: id }, { name: name, slug: slugify(name) }, { new: true })
     if (!student) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(200).json({data:student})
} 
)

exports.deleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.params
    const student = await StudentModel.findByIdAndDelete(id)
    if (!student) {
        res.status(404).json({msg: `no student found for this id ${id}`})
    }
    res.status(204).send()
}
)















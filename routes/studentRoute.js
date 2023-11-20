const express = require('express')
const {getStudents, getStudent, createStudents, updateStudent, deleteStudent} = require('../services/studentService')
const router = express.Router()

router.route('/').get(getStudents).post(createStudents)
router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent)
module.exports = router
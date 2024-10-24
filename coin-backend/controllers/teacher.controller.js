const { Teacher } = require("../models")
const { TeacherSchema, Validation } = require("../validations")

exports.createTeacher = async (req, res) => {
    Validation(TeacherSchema, req, res)
    try {
        const teacher = await Teacher.create(req.body)
        res.status(200).json({
            success: true,
            message: "Teacher created",
            teacher
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findAll()
        res.status(200).json({
            success: true,
            message: "List of Teacher",
            teacher
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id)
        if (!teacher) {
            res.status(404).json({
                success: false,
                message: "Teacher not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Details of Teacher",
            teacher
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.updateTeacher = async (req, res) => {
    Validation(TeacherSchema, req, res)
    try {
        const teacher = await Teacher.findByPk(req.params.id)
        if (!teacher) {
            res.status(404).json({
                success: false,
                message: "Teacher not found"
            })
        }
        await teacher.update(req.body)
        res.status(200).json({
            success: true,
            message: "Teacher updated",
            teacher
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id)
        if (!teacher) {
            res.status(404).json({
                success: false,
                message: "Teacher not found"
            })
        }
        await teacher.destroy()
        res.status(200).json({
            success: true,
            message: "Teacher deleted"
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}
const { Teacher } = require("../models")
const { TeacherSchema, Validation } = require("../validations")

exports.createTeacher = async (req,res)=>{
    Validation(TeacherSchema,req,res)
    try{
        const teacher = await Teacher.create(req.body)
        res.status(200).json({
            success: true,
            message: "Teacher created",
            teacher
        })
    }
    catch(e){
        res.status(500).send(e.message)
    }
}

exports.getTeacher = async (req,res)=>{
    try{
        const teacher = await Teacher.findAll()
        res.status(200).json({
            success: true,
            message: "List of Teacher",
            teacher
        })
    }
    catch(e){
        res.status(500).send(e.message)
    }
}
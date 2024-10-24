const Joi = require("joi");

const Validation = (schema, req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }
};

const AdminSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  is_active: Joi.boolean().required(),
});

const AdminLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const TeacherSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  year: Joi.number().required(),
  phone: Joi.string().pattern(/^\+998[0-9]{9}/).required(),
  direction: Joi.number().required(),
})

const GroupSchema = Joi.object({
  teacher_id: Joi.number().required(),
  room_number: Joi.number().required(),
  day: Joi.string().required(),
  time: Joi.string().required(),
  name: Joi.string().required(),
})

module.exports = { AdminSchema, AdminLoginSchema, TeacherSchema, GroupSchema, Validation };

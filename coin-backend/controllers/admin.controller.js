const { Admin } = require("../models");
const { generateToken } = require("../token");
const { Validation, AdminSchema, AdminLoginSchema } = require("../validations");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {
  Validation(AdminSchema, req, res);
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json({
      success: true,
      message: "Admin created",
      admin,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.loginAdmin = async (req, res) => {
  Validation(AdminLoginSchema, req, res);
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Username or password is invalid",
      });
    }
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Username or password is invalid",
      });
    }
    const token = generateToken(process.env.JWT_ADMIN,admin);
    return res.json({
      success: true,
      message: "Token",
      token: token,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

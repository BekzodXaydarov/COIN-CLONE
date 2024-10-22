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
    console.log(req.body);
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
    const token = generateToken(process.env.JWT_ADMIN, admin);
    return res.json({
      success: true,
      message: "Token",
      token: token,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const admins = await Admin.findAll()
    res.status(200).json({
      success: true,
      message: "List of admins",
      admins
    })
  }
  catch (e) {
    res.status(500).send(e.message)
  }
}

exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.user.id);
    res.status(200).json({
      success: true,
      message: "Admin profile",
      admin
    })
  }
  catch (e) {
    res.status(500).send(e.message)
  }
}
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id)
    if (!admin) {
      res.status(404).json({
        success: false,
        message: "Admin not found",
      })
    }
    res.status(200).json({
      success: true,
      message: "Admin Details",
      admin
    })
  }
  catch (e) {
    res.status(500).send(e.message)
  }
}

exports.updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id)
    if (!admin) {
      res.status(404).json({
        success: false,
        message: "Admin not found",
      })
    }
    await admin.update(req.body)
    res.status(200).json({
      success: true,
      message: "Admin Updated",
      admin
    })
  }
  catch (e) {
    res.status(500).send(e.message)
  }
}

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id)
    if (!admin) {
      res.status(404).json({
        success: false,
        message: "Admin not found",
      })
    }
    await admin.destroy()
    res.status(200).json({
      success: true,
      message: "Admin Deleted",
    })
  }
  catch (e) {
    res.status(500).send(e.message)
  }
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5NTEwMjEwLCJleHAiOjE3Mjk1OTY2MTB9.a6L9T3P_DY8WIH86NktNH1ZDAsVd3hteDm4K7R9F0go
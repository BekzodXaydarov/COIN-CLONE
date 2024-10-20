const { Router } = require("express");
const router = Router();

const AdminController = require("../controllers/admin.controller");
const { verifyToken } = require("../token");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin
 */
/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: create a new admin
 *     tags: [Admin]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       requierd: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post(
  "/admin",
  verifyToken(process.env.JWT_ADMIN),
  AdminController.createAdmin
);
/**
 * @swagger
 * /api/adminLogin:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       requierd: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login is successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/adminLogin", AdminController.loginAdmin);

module.exports = router;

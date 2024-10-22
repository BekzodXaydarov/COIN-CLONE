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

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: get the admin
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: List of Admin
 *       500:
 *         description: Server error
 */
router.get("/admin", verifyToken(process.env.JWT_ADMIN), AdminController.getAdmin)
/**
 * @swagger
 * /api/admin-profile:
 *   get:
 *     summary: get the admin
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: [] 
 *     responses:
 *       200:
 *         description: List of Admin
 *       500:
 *         description: Server error
 */
router.get("/admin-profile", verifyToken(process.env.JWT_ADMIN), AdminController.getAdminProfile)
/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: get the admin by id
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
 *         schema:
 *           type: integer
 *         required: true
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin found
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.get("/admin/:id", AdminController.getAdminById)
/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: update the admin 
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
 *         schema:
 *           type: integer
 *         required: true
 *     security:
 *       - bearerAuth: []
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
 *         description: Admin Updated
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admin/:id", AdminController.updateAdmin)
/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete the admin 
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
 *         schema:
 *           type: integer
 *         required: true
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin Deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete("/admin/:id", AdminController.deleteAdmin)

module.exports = router;

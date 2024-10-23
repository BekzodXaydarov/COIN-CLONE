const {Router} = require("express")
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: Teacher
 */

const TeacherController = require("../controllers/teacher.controller")
const { verifyToken } = require("../token")

/**
 * @swagger
 * /api/teacher:
 *   post:
 *     summary: create a new Teacher
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               year: 
 *                 type: number
 *               phone:
 *                 type: string
 *               direction:
 *                 type: number
 *     responses:
 *       200:
 *         description: Teacher created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/teacher",verifyToken(process.env.JWT_ADMIN),TeacherController.createTeacher)
/**
 * @swagger
 * /api/teacher:
 *   get:
 *     summary: get the teacher
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of Teacher
 *       500:
 *         description: Server errror
 */
router.get("/teacher",verifyToken(process.env.JWT_ADMIN),TeacherController.getTeacher)

module.exports = router
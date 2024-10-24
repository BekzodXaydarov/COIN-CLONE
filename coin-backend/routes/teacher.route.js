const { Router } = require("express")
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
router.post("/teacher", verifyToken(process.env.JWT_ADMIN), TeacherController.createTeacher)
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
router.get("/teacher", verifyToken(process.env.JWT_ADMIN), TeacherController.getTeacher)

/**
 * @swagger
 * /api/teacher/{id}:
 *   get:
 *     summary: get the teacher by id
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Details of Teacher
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */
router.get("/teacher/:id", verifyToken(process.env.JWT_ADMIN), TeacherController.getTeacherById)
/**
 * @swagger
 * /api/teacher/{id}:
 *   put:
 *     summary: update the teacher
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
 *         schema:
 *           type: integer
 *         required: true
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
 *         description: Teacher updated
 *       404:
 *         description: Teacher not found
 */
router.put("/teacher/:id",verifyToken(process.env.JWT_ADMIN),TeacherController.updateTeacher)

/**
 * @swagger
 * /api/teacher/{id}:
 *   delete:
 *     summary: delete the teacher
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Teacher ID
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Teacher updated
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Server error
 */

router.delete("/teacher/:id",verifyToken(process.env.JWT_ADMIN),TeacherController.deleteTeacher)

module.exports = router
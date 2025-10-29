import express from 'express';
import { createCourse } from '../controllers/teacher.course.js';
import { authCheck, teacherCheck } from '../middleware/auth.middleware.js';
const router = express.Router();
router.post('/new-course', authCheck, teacherCheck, createCourse);
export default router;

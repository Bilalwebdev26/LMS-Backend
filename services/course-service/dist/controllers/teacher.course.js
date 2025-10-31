export {};
// import { Course, type CourseInterface } from '../model/course.model.js';
// import type { Request, Response } from 'express';
// export const createCourse = async (req: Request, res: Response) => {
//   try {
//     const {
//       title,
//       subTitle,
//       description,
//       price,
//       discountPercent,
//       difficulty,
//       language,
//       certificate,
//       whatULearn,
//       isFree,
//       tags,
//       skills,
//       instructors,
//     } = req.body;
//     //Student don't have permession to add courses.
//     if (req?.user?.role === 'student') {
//       return res.status(400).json({
//         tag: 'addCourse',
//         message: 'Student is not allowed to add course.',
//       });
//     }
//     const newCourse = new Course({
//       title,
//       subTitle,
//       description,
//       price,
//       discountPercent,
//       difficulty,
//       language,
//       certificate,
//       whatULearn,
//       isFree,
//       tags,
//       skills,
//       instructors,
//     });
//     await newCourse.save();
//     return res.status(201).json({ message: 'Course created SuccessFully', newCourse });
//   } catch (error) {
//     return res.status(400).json({
//       tag: 'addCourse',
//       message: error || 'Student is not allowed to add course.',
//     });
//   }
// };
// export const uploadCourseMedia = async (req: Request, res: Response) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) {
//       return res.status(404).json({ tag: 'courseFind', message: 'Course not available.' });
//     }
//     //media chaye wo in the form of video or image or both
//   } catch (error) {}
// };
// export const updateCourse = async (req: Request, res: Response) => {
//   try {
//     const {
//       title,
//       subTitle,
//       description,
//       price,
//       discountPercent,
//       difficulty,
//       language,
//       certificate,
//       whatULearn,
//       isFree,
//       tags,
//       skills,
//       instructors,
//     } = req.body;
//   } catch (error) {}
// };
//# sourceMappingURL=teacher.course.js.map
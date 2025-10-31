// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import teacherCourseRoutes from './routes/teacher.course.js';
// import studentCourseRoutes from './routes/student.course.js';
// import adminCourseRoutes from './routes/admin.course.js';
// import { connectDB } from './config/db.config.js';
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3003;
// //-------------middlewares----
// app.use(express.json());
// app.use(cookieParser());
// //-------------Routes.........
// app.use('/api/v1/teacher/course', teacherCourseRoutes);
// app.use('/api/v1/admin/course', adminCourseRoutes);
// app.use('/api/v1//studentcourse', studentCourseRoutes);
// //----------------------------
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log('App running : ', PORT);
//     });
//   })
//   .catch((error) => {
//     console.log('Error occur while server running : ', error);
//   });

import express from 'express';
// <<<<<<< HEAD
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import teacherCourseRoutes from './routes/teacher.course.js';
// import studentCourseRoutes from './routes/student.course.js';
// import adminCourseRoutes from './routes/admin.course.js';
// import { connectDB } from './config/db.config.js';
// const unused = "ali"
// const unused2 = "ali1"
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3003;
// //-------------middlewares----
// app.use(express.json());
// app.use(cookieParser());
// //-------------Routes.........
// app.use('/api/v1/teacher/course', teacherCourseRoutes);
// app.use('/api/v1/admin/course', adminCourseRoutes);
// app.use('/api/v1//studentcourse', studentCourseRoutes);
// //----------------------------
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`App running : ${unused} ${unused2}`, PORT);
//     });
//   })
//   .catch((error) => {
//     console.log('Error occur while server running : ', error);
//   });
// =======
const app = express();
app.listen(3003, () => {
  console.log('Course App running : ', 3003);
});
// >>>>>>> main

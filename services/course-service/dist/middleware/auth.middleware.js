export {};
// import type { Request, Response, NextFunction } from 'express';
// import jwt, { decode } from 'jsonwebtoken';
// export const authCheck = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.cookies.accessToken || req.headers?.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(400).json({ tag: 'TokenError', message: 'Token not found,Login Please' });
//     }
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
//     if (!decodedToken) {
//       return res.status(400).json({ message: 'Please login to get Access' });
//     }
//     req.user = decodedToken;
//     next();
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message || 'Error while authenticated' });
//   }
// };
// export const adminCheck = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     if (req.user?.role === 'admin') {
//       next();
//     }
//     return res.status(400).json({ message: 'You are not authenticated to this job.' });
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message || 'Error while checking role' });
//   }
// };
// export const teacherCheck = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     if (req.user?.role === 'admin' || req.user?.role === 'teacher') {
//       next();
//     }
//     return res.status(400).json({ message: 'Students are not authenticated to this job.' });
//   } catch (error: any) {
//     return res.status(500).json({ message: error.message || 'Error while checking role' });
//   }
// };
//# sourceMappingURL=auth.middleware.js.map
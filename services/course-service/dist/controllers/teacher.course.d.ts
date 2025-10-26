import type { Request, Response } from "express";
export declare const createCourse: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const uploadCourseMedia: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCourse: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=teacher.course.d.ts.map
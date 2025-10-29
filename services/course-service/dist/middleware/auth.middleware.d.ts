import type { Request, Response, NextFunction } from 'express';
export declare const authCheck: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Response<any, Record<string, any>> | undefined;
export declare const adminCheck: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Response<any, Record<string, any>>;
export declare const teacherCheck: (
  req: Request,
  res: Response,
  next: NextFunction,
) => Response<any, Record<string, any>>;
//# sourceMappingURL=auth.middleware.d.ts.map

import type { Request, Response, NextFunction } from "express";
import { serviceVersions } from "../service-version/all.service.version.js";
export declare const apiVersionCheck: (serviceName: keyof typeof serviceVersions) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=api.versioning.d.ts.map
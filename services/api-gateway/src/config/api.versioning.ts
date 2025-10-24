// import type { NextFunction, Request, Response } from "express";
// export const apiVersion =
//   (version: string) => (req: Request, res: Response, next: NextFunction) => {
//     if (!req.originalUrl.startsWith(`/${version}`)) {
//       return res.status(400).json({
//         error: `Invalid API version. Expected /${version} in URL.`,
//       });
//     }
//     next();
//   };

import type { Request, Response, NextFunction } from "express";
import { serviceVersions } from "../service-version/all.service.version.js";

export const apiVersionCheck = (serviceName: keyof typeof serviceVersions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const expectedVersion = serviceVersions[serviceName];
    if (!req.originalUrl.startsWith(`/${expectedVersion}`)) {
      return res.status(400).json({
        error: `Invalid API version for ${serviceName}. Expected path to start with /${expectedVersion}`,
      });
    }

    next();
  };
};

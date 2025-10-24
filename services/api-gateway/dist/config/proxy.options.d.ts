import type { NextFunction, Request, Response } from "express";
export declare const proxyOptions: {
    proxyReqPathResolver: (req: Request) => string;
    proxyErrorHandler: (err: Error, res: Response, next: NextFunction) => void;
};
//# sourceMappingURL=proxy.options.d.ts.map
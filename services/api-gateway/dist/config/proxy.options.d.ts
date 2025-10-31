import type { Request, Response } from 'express';
export declare const proxyOptions: {
    proxyReqPathResolver: (req: Request) => string;
    proxyErrorHandler: (err: Error, res: Response) => void;
};
//# sourceMappingURL=proxy.options.d.ts.map
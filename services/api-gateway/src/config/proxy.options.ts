import type { Request, Response } from 'express';
export const proxyOptions = {
  proxyReqPathResolver: (req: Request) => {
    return req.originalUrl.replace(/^\/v1/, '/api');
  },
  proxyErrorHandler: (err: Error, res: Response) => {
    console.error('Proxy Error:', err.message);
    res.status(500).json({ error: 'Proxy request failed' });
  },
};

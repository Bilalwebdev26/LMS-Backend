export const proxyOptions = {
  proxyReqPathResolver: (req) => {
    return req.originalUrl.replace(/^\/v1/, '/api');
  },
  proxyErrorHandler: (err, res, next) => {
    console.error('Proxy Error:', err.message);
    res.status(500).json({ error: 'Proxy request failed' });
  },
};
//# sourceMappingURL=proxy.options.js.map

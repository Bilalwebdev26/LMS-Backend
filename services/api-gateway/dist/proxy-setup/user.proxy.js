import { proxyOptions } from '../config/proxy.options.js';
import proxy from 'express-http-proxy';
export const userProxy = proxy(process.env.USER_SERVICE, {
  ...proxyOptions,
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    return proxyReqOpts;
  },
  userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
    try {
      const res = JSON.parse(proxyResData.toString('utf8'));
      console.log('User Res Decorator : ', res);
      console.log('proxyResData : ', proxyResData);
      return res;
    } catch {
      return proxyResData;
    }
  },
});
//# sourceMappingURL=user.proxy.js.map

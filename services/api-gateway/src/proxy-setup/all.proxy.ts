import { proxyOptions } from '../config/proxy.options.js';
import proxy from 'express-http-proxy';
import dotenv from 'dotenv';
dotenv.config();
export const userProxy = proxy(process.env.USER_SERVICE as string, {
  ...proxyOptions,
  proxyReqOptDecorator: (proxyReqOpts) => {
    proxyReqOpts.headers['Content-Type'] = 'application/json';
    return proxyReqOpts;
  },
  userResDecorator: (_, proxyResData) => {
    try {
      const res = JSON.parse(proxyResData.toString('utf8'));
      console.log('User Res Decorator : ', res);
      console.log('proxyResData : ', proxyResData);
      return res;
    } catch (error) {
      console.log('Error in authProxy : ', error);
      return proxyResData;
    }
  },
});
export const authProxy = proxy(process.env.AUTH_SERVICE as string, {
  ...proxyOptions,
  proxyReqOptDecorator: (proxyReqOpts) => {
    proxyReqOpts.headers['content-type'] = 'application/json';
    return proxyReqOpts;
  },
  userResDecorator: (_, proxyResData) => {
    try {
      return JSON.parse(proxyResData.toString('utf8'));
    } catch (error) {
      console.log('Error in authProxy : ', error);
      return proxyResData;
    }
  },
});

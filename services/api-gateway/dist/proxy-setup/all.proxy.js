import { proxyOptions } from "../config/proxy.options.js";
import proxy from "express-http-proxy";
import dotenv from "dotenv";
dotenv.config();
export const userProxy = proxy(process.env.USER_SERVICE, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers["Content-Type"] = "application/json";
        return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        try {
            const res = JSON.parse(proxyResData.toString("utf8"));
            console.log("User Res Decorator : ", res);
            console.log("proxyResData : ", proxyResData);
            return res;
        }
        catch {
            return proxyResData;
        }
    },
});
export const authProxy = proxy(process.env.AUTH_SERVICE, {
    ...proxyOptions,
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers["content-type"] = "application/json";
        return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        try {
            return JSON.parse(proxyResData.toString("utf8"));
        }
        catch (error) {
            return proxyResData;
        }
    },
});
//# sourceMappingURL=all.proxy.js.map
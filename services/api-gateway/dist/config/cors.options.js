import cors from 'cors';
export const corsOptions = () => {
  const CLIENT_SIDE = process.env.CLIENT_SIDE;
  const ADMIN_SIDE = process.env.ADMIN_SIDE;
  const USER_SERVICE = process.env.USER_SERVICE;
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = [CLIENT_SIDE, ADMIN_SIDE, USER_SERVICE];
      console.log(allowedOrigins);
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Permission not granted.'), false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    credentials: true,
    maxAge: 600,
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });
};
// import cors from "cors";
// export const corsOptions = () => {
//   const CLIENT_SIDE = process.env.CLIENT_SIDE;
//   const ADMIN_SIDE = process.env.ADMIN_SIDE;
//   const USER_SERVICE = process.env.USER_SERVICE;
//   const allowedOrigins = [CLIENT_SIDE, ADMIN_SIDE, USER_SERVICE];
//   console.log(allowedOrigins.indexOf(USER_SERVICE));
//   return cors({
//     origin: (origin, callback) => {
//       // ✅ Allow requests with no Origin header (Postman, internal calls)
//       if (!origin) {
//         return callback(null, true);
//       }
//       // ✅ Allow only whitelisted URLs
//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }
//       // 🚫 Block everything else
//       return callback(new Error("Permission not granted."));
//     },
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
//     exposedHeaders: ["Content-Range", "X-Content-Range"],
//     credentials: true,
//     maxAge: 600,
//     preflightContinue: false,
//     optionsSuccessStatus: 200,
//   });
// };
//# sourceMappingURL=cors.options.js.map

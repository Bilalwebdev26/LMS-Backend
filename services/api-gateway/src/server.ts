import express from "express";
import dotenv from "dotenv";
import { corsOptions } from "./config/cors.options.js";
import { logger } from "./config/winston.log.js";
import { authProxy, userProxy } from "./proxy-setup/all.proxy.js";
import { apiVersionCheck } from "./config/api.versioning.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(corsOptions());
app.use(express.json({ limit: "2mb" }))
//All proxy set up HERE--------------------------------------------------------------
app.use("/v1/user", apiVersionCheck("user"), userProxy);
app.use("/v1/auth", apiVersionCheck("auth"), authProxy);
//All proxy End HERE-----------------------------------------------------------------

app.listen(PORT, () => {
  logger.info(`Api-gateway Run : ${PORT} `);
  logger.info(`Auth-service Run : ${process.env.AUTH_SERVICE} `);
  logger.info(`Analytics-service Run : ${process.env.ANALYTICS_SERVICE} `);
  logger.info(`Course-service Run : ${process.env.COURSE_SERVICE} `);
  logger.info(
    `Notification-service Run : ${process.env.NOTIFICATION_SERVICE} `
  );
  logger.info(`Payment-service Run : ${process.env.PAYMENT_SERVICE} `);
  logger.info(`User-service Run : ${process.env.USER_SERVICE} `);
  logger.info(
    `Content-Managment-service Run : ${process.env.CONTENT_SERVICE} `
  );
  logger.info(`Enrollment-service Run : ${process.env.ENROLLMENT_SERVICE} `);
  logger.info(`Assessment-service Run : ${process.env.ASSESSMENT_SERVICE} `);
  logger.info(`Search-service Run : ${process.env.SEARCH_SERVICE} `);
});

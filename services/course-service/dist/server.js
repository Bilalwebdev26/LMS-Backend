import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookieparser";
import courseSchema from "./routes/teacher.course.js";
import { connectDB } from "./config/db.config.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3003;
//-------------middlewares----
app.use(express.json());
// app.use(cookieParser());
//-------------Routes.........
app.use("/api/v1/course", courseSchema);
//----------------------------
connectDB()
    .then(() => {
    app.listen(PORT, () => {
        console.log("App running : ", PORT);
    });
})
    .catch((error) => {
    console.log("Error occur while server running : ", error);
});
//# sourceMappingURL=server.js.map
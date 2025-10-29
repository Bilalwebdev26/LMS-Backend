import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Enrollment Service run : ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Notification Service run : ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Analytics Service run : ${PORT}`);
});

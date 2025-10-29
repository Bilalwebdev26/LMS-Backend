import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Content Service run : ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Payment Service run : ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`User Service run : ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Assessment Service run : ${PORT}`);
});

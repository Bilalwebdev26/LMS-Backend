import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Search Service run : ${PORT}`);
});

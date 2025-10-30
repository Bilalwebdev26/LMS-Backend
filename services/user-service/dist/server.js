import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.get("/",(req,res)=>{
  res.send("hey")
})
app.post("/",(req,res)=>{
  res.send("hey")
})
app.put("/",(req,res)=>{
  res.send("hey")
})
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`User Service run : ${PORT}`);
});

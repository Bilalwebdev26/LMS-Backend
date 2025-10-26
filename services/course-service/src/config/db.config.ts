import mongoose from "mongoose"
export const connectDB = async()=>{
  try {
    const configDB = await mongoose.connect(`${process.env.MONGODB_URI}/courses-service`);
    console.log(`DB connection SuccessFully : ${configDB.connection.host}`)
  } catch (error) {
    console.log("Error while connecting DB : ",error)
    process.exit(1)
  }
}
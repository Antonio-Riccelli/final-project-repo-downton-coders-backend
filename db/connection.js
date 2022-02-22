
import mongoose from "mongoose";
const connectDB = async () =>{
  try {
    const connect = await mongoose.connect (process.env.MONGO_URL)
    console.log(`connented to connectDB: ${connect.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit[1]
    
  }
}
export default connectDB
import mongoose from "mongoose";
import { my_env_var_val } from "./myEnv.js";


export const connectDB = async ()=>{
    
 try {
    const conn = await mongoose.connect(my_env_var_val.DB);
    console.log(`✅connected to database succesfully${conn.connection.host}`);
 } catch (error) {
    console.error(`❌connection to database failed`)
    process.exit(1) // code 1 means failure
}

}
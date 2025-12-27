import express from 'express';
import path from "path";
import { my_env_var_val } from './config/myDB.js';
import cors from "cors"


const app = express();
app.use(cors())
const __dirname = path.resolve()


app.get("/link",(req,res)=>{

res.status(200).json({message:"success"})

});

//make our app ready for deployment

if(my_env_var_val.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname,"../admin/dist")));
    app.get("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../admin","dist","index.html"));

    })

}



app.listen(my_env_var_val.PORT,()=>{

    console.log("server is running succesfully123")
})
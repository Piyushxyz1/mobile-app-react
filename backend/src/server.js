import express from 'express';




const app = express();


app.get("/link",(req,res)=>{

res.status(200).json({message:"success"})

});



app.listen(5000,()=>{

    console.log("server is running succesfully123")
})
import express from "express";
import routes from "./routes.js"
import mongoose from "mongoose";
import "dotenv/config";
import cors from 'cors';
const app = express();


try {
    const uri= process.env.URI;
    await mongoose.connect(uri);
    console.log(`DB connected successfuly!`);
    
    
} catch (err) {
    console.error(err.message)
}


app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.use(routes);




app.listen(5000,()=>console.log(`Server is listening on http://localhost:5000......`));
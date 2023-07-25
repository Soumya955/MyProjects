const express=require("express")
const cors=require("cors")

const  ApiRouter=require("./features/App/api.router.js")

const app=express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api",ApiRouter);


app.listen(8080,()=>console.log("server started"))



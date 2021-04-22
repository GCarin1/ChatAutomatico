import express, { request, response } from "express";

const app = express();


app.get("/",(request,response)=>{
    return response.json({
        message:"olá",
    });
});
app.post("/users",(request,response)=>{
    return response.json({
        message:"usuario salvo",
    });
})
app.listen(3333,()=>console.log("server run"));
import express from "express";
const app = express();
// app.get('/student/delete/:id',(req,res)=>{
//     const {id} = req.params;
//     res.send(id)
// });

// app.get('/product/:category/:id',(req,res)=>{
//     const {category,id} = req.params;
//     res.send(`Product name ${category} product id ${id}`)
// });


app.get("/user/:id",(req,res)=>{
    console.log("his is user id path")
    res.send("response ok")
})
app.param("id",(req,res,next)=>{
    console.log(id);
    next();
})


app.listen(3000,()=>console.log("server up"))
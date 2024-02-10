const express=require('express');
const cors=require('cors');

app=express();
 
app.use(cors());

app.listen(8000,()=>{
    console.log(`server listen port 8000`);
})

app.get('/test',(req,res)=>res.send("ok"));




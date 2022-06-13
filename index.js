const express= require('express');
var bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.json())
const port =3000

app.post('/add',(req,res)=>{
    const action=req.body.action
    if(action==="sum"){

        const ip=req.body.input
        const op=ip[0]+ip[1]
        res.send({
            result: action,
            output: op
            });
    }
    else{
        res.send("something went wrong" )
    }
   
})

app.post("/sub",(req,res)=>{
let ip= req.body.input;
let sub= ip[0]-ip[1];

res.send(
   {result: "23",
    outpt: sub

   } 
)
 



})



app.get('/',(req,res)=>{
   
res.send("Hello");

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

//https://3000-nahdus-nodeexpressfile-r3ba04czk5m.ws-us47.gitpod.io/
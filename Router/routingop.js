const router= require('express').Router();


router.post('/add',(req,res)=>{

    const action=req.body.action
    if(action==="sum"){

        const ip=req.body.input
        const op=ip[0]+ip[1]
        res.send({
            result: action,
            output: op
            });}

            else{res.send("Please select proper action")}

});

router.post('/sub',(req,res)=>{

    const action=req.body.action
    if(action==="sub"){

        const ip=req.body.input
        const op=ip[0]-ip[1]
        res.send({
            result: action,
            output: op
            });}

            else{res.send("Please select proper action")}

});

router.post('/mul',(req,res)=>{

    const action=req.body.action
    if(action==="mul"){

        const ip=req.body.input
        const op=ip[0]*ip[1]
        res.send({
            result: action,
            output: op
            })}
            else{res.send("Please select proper action")
        }

});


router.post('/div',(req,res)=>{

    const action=req.body.action
    if(action==="div"){

        const ip=req.body.input
        const op=ip[0]/ip[1]
        res.send({
            result: action,
            output: op
            });}

            else{res.send("Please select proper action")}

});


module.exports= router;
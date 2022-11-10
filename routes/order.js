const express = require('express');
const routes = express.Router()


routes.get('/',(req,res,next)=>{
   res.status(200).json({
    message:"Handling GET order Request"
   });
});
routes.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling Post order Request"
    })
})
routes.post('/:orderId',(req,res,next)=>{
    const id = req.params.orderTd;
     if(id === 'oId'){
    res.status(200).json({
        message:"Handling Post orderId Request"
    })}
    else{
        res.status(200).json({
            message:"you got An Id For Orders"
        });
    }
})

module.exports = routes
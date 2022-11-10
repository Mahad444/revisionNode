const express = require('express')
 const routes = express.Router();



 routes.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET request"
    })
 });
 routes.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST request"
    })
 });
 routes.post('/:pid',(req,res,next)=>{
    const id = req.params.pid;
  if (id === 'sp'){
    res.send("Handling Special ID")
  }else{
    res.status(200).json({
        message:"Handling POST id  request"
    })}
 });
routes.patch('/',(req,res,next)=>{
    res.status(200).json({
        message:"Updated PATCH request"
    })
})
routes.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"Updated DELETE request"
    })
})
 module.exports = routes;
const express = require('express');

const app = express();

const userRouter = express.Router();

const path = '/user'

userRouter.use((req,res,next)=>{
    console.log(req.ip);
    next();
})

userRouter.get(path,
(req,res)=>{
    console.log('GET')
    res.json({data:'GET'})
});

userRouter.post(path,
(req,res)=>{ 
    console.log('POST');
    res.json({data:'POST'})
        
});

userRouter.put(path,
(req,res)=>{
    console.log('PUT');
    res.json({data:'PUT'})
});

userRouter.delete(path,
(req,res)=>{
    console.log('delete');
    res.json({data:'DELETE'})
});


module.exports = userRouter; 
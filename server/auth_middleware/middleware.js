const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret_key = process.env.SECRET_KEY;


const middleware = (req,res,next)=>{
  try{
    const token = req.cookies.sid;
    const result = jwt.verify(token,secret_key);
    if (result){
      req['email'] = result.email;
      next();
    }
    else{
      res.status(404).send("Token not found");
    }
  }
  catch(error){
    console.log(error)
  }
}

module.exports = middleware
const express = require('express')

const router = express.Router()

router.get('/isvaliduser',(req,res)=>{
  res.send(true)
})

module.exports = router
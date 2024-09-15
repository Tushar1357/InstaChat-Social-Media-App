const express = require('express');
const fs = require('fs');
const path = require('path');
const main_router = require('./routers/main_router');
const cors = require('cors');
const cp = require('cookie-parser');



//importing routers
const signup_router = require("./routers/signup");
const login_router = require('./routers/login');
const validate_router = require('./routers/validate')
const post = require('./routers/createpost')

const port = 3000
const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST'],
  credentials: true,
}))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cp());

app.use('/',main_router)
app.use('/register',signup_router);
app.use('/signin',login_router);
app.use('/verify',validate_router);
app.use('/create-post',post)

app.listen(3000,()=>{
  console.log(`Server listening to port : ${port}`)
})
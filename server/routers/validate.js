const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router()

const secret_key = process.env.SECRET_KEY;

router.get('/validate', (req, res) => {
  try {
    const token = req.cookies.sid;
    
    if (!token) {
      return res.send({ status: false, message: "Token not found" });
    }

    jwt.verify(token, secret_key, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ status: false, message: "Invalid Token" });
      }

      res.send({ status: true, message: "User validated", user: decoded });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "An internal error occurred" });
  }
});


module.exports = router



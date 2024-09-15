const express = require("express");
const { decryptData } = require("../utils/bcrypt");
const { find_user } = require("../controllers/sign_up_controller");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;

router.post("/login", async (req, res) => {
  const info = req.body;
  const password = info.password;
  const data = await find_user(info.email);
  if (data) {
    const hashed_password = data.password;
    const result = await decryptData(password, hashed_password);
    if (result) {
      const token = jwt.sign({ email: info.email }, secret_key, {
        expiresIn: 60 * 60 * 24 * 30,
      });
      res.cookie("sid", token, {
        sameSite: 'None',
        httpOnly: false,
      });
      res.send({ status: true, message: "Valid User" });
    } else {
      res.send({ status: false, message: "Wrong Password" });
    }
  } else {
    res.send({ status: false, message: "Invalid User" });
  }
});

module.exports = router;

const express = require("express");
const { encryptData } = require("../utils/bcrypt");
const { insert_user } = require("../controllers/sign_up_controller");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const info = req.body;
    const password = info.password;
    const hashed_pass = await encryptData(password);
    if (hashed_pass) {
      info.password = hashed_pass;
      const result = await insert_user(info);
      if (result) {
        res.send({ message: "User has been added successfully", status: true });
      } else {
        res
          .status(400)
          .send({ message: "Internal Server error", status: false });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Internal Server error", status: false });
  }
});

module.exports = router;

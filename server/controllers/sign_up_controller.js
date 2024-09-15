const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.url;
mongoose.connect(url)

const signUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


const signUpModel = mongoose.model("Users",signUpSchema,"users")

const insert_user = async (data)=>{
  const result = await signUpModel.findOne({email: data.email})
  if (!result){
    await signUpModel.create(data)
    return true
  }
  return false
}

const find_user = async (email) => {
  try{
    const result = await signUpModel.findOne({email: email});
    if (result){
      return result;
    }
    return false;
  }
  catch(error){
    console.log(error);
    return false;
  }
}


module.exports = {insert_user , find_user}
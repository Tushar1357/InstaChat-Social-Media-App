const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  email: {type: String, required: true},
  title: {type:String, required: true},
  content: {type:String,required: true},
  imagePath: {type: String},
  tags: {type: String, default: []},
})


const postModel = mongoose.model('post',postSchema,'POSTS')

const create_post = async (data)=>{
  try{
    await postModel.create(data);
    return true;
  }
  catch (error){
    console.log(error)
    return false;
  }
}


const get_posts = async(email)=>{
  try{
    const result = await postModel.find({email: email});
    if (result){
      return result;
    }
    else{
      return false;
    }
  }
  catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {create_post,get_posts};
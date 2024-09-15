const bcrypt = require("bcrypt");

const encryptData = async (data) => {
  try {
    const result = await bcrypt.hash(data.toString(),10);
    if (result) return result;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};


const decryptData = async (ogData, encData)=>{
  try{
    const result = await bcrypt.compare(ogData,encData);
    if (result){
      return true;
    }
    return false;

  }
  catch(error){
    console.log(error);
    return false;
  }
}

module.exports = {encryptData, decryptData};
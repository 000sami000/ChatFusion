import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profileimg: {
    type: String,
    default: "",
  },
},{timestamps:true});
const usermodal=mongoose.model('User',userSchema);

export default usermodal;
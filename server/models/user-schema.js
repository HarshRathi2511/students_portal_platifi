import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  EmailID: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  USN: {
    type: String,
    required: true,
  }

})


const user = mongoose.model('user', userSchema );


export default user;
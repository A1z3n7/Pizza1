import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: {type: String, required: true},
  streetAddress: {type: String},
  postalCode: {type: Number},
  city: {type: String},
  admin: {type: Boolean, default: false}, 
  country: {type: String},
  phone: {type: Number},
}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);
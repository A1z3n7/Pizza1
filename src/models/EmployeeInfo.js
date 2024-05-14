import {model, models, Schema} from "mongoose";


const EmployeeInfoSchema = new Schema({
    image: {type: String, required:false},
    name :  {type: String, required: true},
    email: {type: String, required: true},
    streetAddress: {type: String, required: true},
    phone: {type: Number, unique: true},
    deliveryArea: {type: String},   
}, {timestamps: true});

export const EmployeeInfo = models?.EmployeeInfo || model('EmployeeInfo', EmployeeInfoSchema);
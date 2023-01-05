const mongoose = require('mongoose');
const ClaimSchema = new mongoose.Schema(
    {
        name: String,
        hospital: String,
        age:Number,
        phone:Number,
        address:{
            type:String,
        },
        policyId:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true 
        },
        date: {
            type:String,
            default:Date.now(),
        },
    }
);
module.exports=mongoose.model('Claim', ClaimSchema);
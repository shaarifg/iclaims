const mongoose = require('mongoose');
const ClaimSchema = new mongoose.Schema(
    {
        name: String,
        hospital: String,
        age:String,
        phone:String,
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
        },
    }
);
module.exports=mongoose.model('Claim', ClaimSchema);
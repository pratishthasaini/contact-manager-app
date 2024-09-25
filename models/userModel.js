const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email : {
        type : String,
        require : [true, "please add the contact email"],
        unique : [true, "email already exists"]
    },
    password : {
        type : String,
        require : [true, "please add the password"],
    },
},
{timestamps : true}
);

module.exports = mongoose.model("User", userSchema);
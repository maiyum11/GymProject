let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username:
    {
        type:String,
        default:"",
        trim:true,
        required:"Please enter a valid username"

    },
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        required:"Please enter a Display Name"

    },
    created:
    {
        type:Date,
        default: Date.now

    },
    update:
    {
        type:Date,
        default: Date.now

    }
},
{
    collection: "user"
}
)

//config options for user model
let options = ({MissingpasswordError:'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);
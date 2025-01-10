import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt'


const UserSchema = new Schema ({


    fullname:{
        type:String,
        required:true,
        trim:true
    },


    password:{
        type:String,
        required:true,
        trim:true
    },


    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:1
    }

})


mongoose.models ={}

UserSchema.pre("save", async function (next){
    const encrypted = await bcrypt.hash(this.password.toString(), 10);
    this.password = encrypted;
    next();
})


const User = mongoose.model("User", UserSchema);
export default User;
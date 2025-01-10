import User from "@/schema/user.schema";
import { NextResponse as res } from "next/server";
import bcrypt from 'bcrypt';
import jwt from  'jsonwebtoken';
import {db} from '@/lib/db'

const getToken = (payload) => {
const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1d'})
const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn:'7d'})

return {
    accessToken,
    refreshToken
}
}

export const POST = async (request)=>{
db();
    try{
const {email, password} = await request.json();

const user =  await User.findOne({email})

if (!user){
    return res.json({
        success:false,
        message:"User not found"
    }, {
        status:404
    })
}


const isLogin =  await bcrypt.compare(password, user.password);
if(!isLogin){
    return res.json({
        success:false,
        message:"Incorrect credentials"
    },
{status:401})
}


const token = getToken({fullname:user.fullname, email:user.email,
    _id:user._id
})


const result =  res.json({success:true,
    message:"Login successfull",

}, {
    status:200
})

result.cookies.set("accessToken", token.accessToken, {
    httpOnly:true,
    secure:process.env.PROD === 'true' ? true:false,
    path:'/'
})

result.cookies.set("refreshToken", token.refreshToken, {
    httpOnly:true,
    secure:process.env.PROD === 'true' ? true:false,
    path:'/',

})

return result;


    }
    catch(err){
        return res.json({
            success:false
        }, {
            status:500
        })
    }
}
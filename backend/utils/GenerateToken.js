require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.generateToken=(payload,passwordReset=false)=>{
    return jwt.sign(payload,"test",{expiresIn:"10d"})
}
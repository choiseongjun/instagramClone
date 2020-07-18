const express =require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requiredLogin')

router.get('/',(req,res) => {
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password||!name){
        res.status(422).json({error:"칸을 다 채워주세요"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"이미 존재하는 회원입니다"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword =>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })

            user.save()
            .then(user=>{
                res.json({message:"성공적으로 저장되었습니다"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/signin', (req, res)=>{
    const {email,password} = req.body
    if(!email ||!password){
        res.status(422).json({error:"이메일 또는 비밀번호를 넣어주세요"})
    }
    User.findOne({email:email})
     .then(savedUser=>{
         if(!savedUser){
             return res.status(422).json({error:"이메일 또는 비밀번호를 입력해주세요"})
         }
         bcrypt.compare(password,savedUser.password)
          .then(doMatch=>{//비밀번호가 맞는경우
              if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                   
                const {_id,name,email} =savedUser
                res.json({token,user:{_id,name,email},message:"로그인이 완료되었습니다"})  
                //res.json({message:"로그인이 완료되었습니다"})   
                                 
              }else{
                  return res.status(422).json({error:"이메일 또는 비밀번호가 틀렸습니다"})
              }
          })


     })
     .catch(err=>{
         console.log(err);
     })
})

router.get("/protected",requireLogin,(req,res)=>{
    res.send("hello user")
})
module.exports = router
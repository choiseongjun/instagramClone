const express =require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')


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

module.exports = router
const express =require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requiredLogin')
const Post = mongoose.model("Post")

router.post('/createpost',requireLogin,(req,res) => {
    const {title,body} = req.body
    if(!title || !body){
        res.status(422).json({error:"title 또는 body를 입력해주세요"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router
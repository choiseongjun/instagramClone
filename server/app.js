const express = require('express');
const app = express();
const PORT  = 5000;
const mongoose =require('mongoose');
const {MONGOURI} = require('./keys')


require('./models/user')
app.use(express.json())//json으로 받기위함
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log("connection to mongo yeahh");
})
mongoose.connection.on('error',(err)=>{
    console.log("error connection ",err);
})
// const customMiddleware = (req, res, next) => {
//     console.log("middleware executed");
//     next();
// }

//app.use(customMiddleware)

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})

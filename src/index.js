
const express=require("express")
const bodyParser=require("body-parser")
const {default:mongoose}=require("mongoose")
const route=require("./routes/route")

const app=express()
app.use(bodyParser.json())
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://hublimathgeeta:swami123@geeta.ygv2q9j.mongodb.net/test",{
    useNewUrlParser:true,
})

.then(()=>console.log("Mongodb is connected"))
.catch((err)=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT||3000,function(){
    console.log("Express is running on port " + process.env.PORT||3000)
})
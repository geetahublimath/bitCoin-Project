const express=require("express")
const router=express.Router()
const chainController=require("../controller/chainController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/assets",chainController.getBlockChain) 


module.exports=router
    

const axios=require("axios")
const bitcoinModel = require("../model/bitcoinModel")


const getBlockChain=async function(req,res){
    try{
        let option={
            method:"get",
            url:`https://api.coincap.io/v2/assets`,
        }
        let result=await axios(option)
        const {data}=await result.data
        data.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)
        await bitcoinModel.deleteMany()
        await data.forEach((element) => {
            const result=new bitcoinModel(element)
            result.save()
            
        });
        console.log(data)
        res.status(200).send({data:data})
    
    }catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }
}

module.exports.getBlockChain=getBlockChain
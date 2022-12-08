const mongoose = require('mongoose');


const bitcoinSchema = new mongoose.Schema({

    symbol:{
        type:String,
        unique:true,
        required:true,
    } ,
    name:{
        type:String,
        unique:true,
        required:true,
    } ,
    marketCapUsd:{
        type:String ,
        unique:true,
        required:true,
    },

    priceUsd: {
        type:String,
        unique:true,
        required:true,
    },


},
    { timestamps: true });

module.exports = mongoose.model('Bitcoin', bitcoinSchema)


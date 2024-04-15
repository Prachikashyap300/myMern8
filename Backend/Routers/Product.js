const express = require('express');
const router = express.Router();
const Model = require('../Models/product')

router.post('/add',(req,res)=>{
    console.log(req.body);
    //storing data to mongodb
    new Model(req.body).save()
    .then(result=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
        res.status(500).json(err)
    });
})

module.exports=router;
const express = require('express')
const routers = express.Router()
const Aliens =require('../models/alien')


routers.get('/',async(req,res) => {
    try{
        const aliens= await Aliens.find()
        res.json(aliens)
    }catch(err){
        res.send('Error'+ err)
    }
})


routers.post('/',async(req,res)=> {
    const alien=new Aliens({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1= await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }

    
})

module.exports =routers
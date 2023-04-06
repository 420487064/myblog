const express = require('express')
const router = express.Router()

const { rq } = require('../../utils/dbquery');
const jwt = require('../../utils/jwt'); 

//登入验证
router.post('/user/id', function(req,res){
    rq("select * from user where user = ? and pw = ?",[req.body.user,req.body.pw]).then(async (data)=>{
        var token = await jwt.sign({ user:req.body.user,pw:req.body.pw},jwt.key,{
        })
        if(data.length == 1){
        res.send({
            success:true,   
            data,
            token,
            code:200 
        })
        }else{
            res.send({
                code:404 
            })
        }
    })
})

module.exports = router
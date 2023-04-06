const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 根据id获取
router.get('/blogs/getBlogById',function(req,res){
    console.log(req.query);
    rq("select * from article where _id = ?",[req.query.id]).then((data)=>{
        res.send({
            success:true,
            blog:data,
        })
    })
})

//  根据id删除
router.get('/article/delid',function(req,res){
    rq("delete from article where id = ?",[req.query.id]).then((data)=>{
        let status;
        if(data.affectedRows == 1){
            status = 200;
        }
        else {
          status = 404
        }
        res.send({
            status
        })
    })
})




module.exports = router
const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 根据category获取
router.get('/article/gettag',function(req,res){
    rq("select * from article where class = ?",[req.query.tag]).then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})

// 根据category页数获取
router.get('/blogs/getBlogsByCategory',async function(req,res){
    let total = 0;
    await rq("select count(*) 'total' from article where category = ?",[req.query.category]).then((data) =>{
       total = data[0].total;
    });

    rq("select * from article where category = ? limit ? ,?",[req.query.category,(req.query.pageNum - 1) * 12,req.query.pageNum * 12]).then((data)=>{
       console.log(data,total)
        res.send({
            success:true,
            data,
            total
        })
    })
})



module.exports = router
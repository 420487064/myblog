const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 根据 tag 页数 获取
router.get('/blogs/getBlogsByTag',async function(req,res){
    let total = 0;
    await rq("select count(*) 'total' from article where tag = ?",[req.query.tag]).then((data) =>{
       total = data[0].total;
    });

    rq("select * from article where tag = ? limit ? ,?",[req.query.tag,(req.query.pageNum - 1) * 12,req.query.pageNum * 12]).then((data)=>{
       console.log(data,total)
        res.send({
            success:true,
            data,
            total
        })
    })
})

// 根据各种 tag
router.get('/remote-search/getAllTags',function(req,res){
    rq("select distinct *  from article ",[req.query.tag]).then((data)=>{
        res.send({
            success:true,
            info:data,
        })
    })
})



module.exports = router
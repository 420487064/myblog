const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 根据时间获取数据
router.get('/blogs/getRecentBlog',function(req,res){
    rq("select * from article  order by upTime",[req.query.tag]).then((data)=>{
        res.send({
            success:true,
            blogs:data,
        })
    })
})




module.exports = router
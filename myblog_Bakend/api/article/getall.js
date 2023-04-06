const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 获取全部 tag 类型
router.get('/article/getalltag',function(req,res){
    rq("select * from article where tag = ?",[req.query.tag]).then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})

// 获取全部 class 类型
router.get('/article/getalltag',function(req,res){
    rq("select * from article where class = ?",[req.query.class]).then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})

// 获取全部文章
router.get('/article/getall',function(req,res){
    rq("select * from article order by upTime desc").then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})

// 获取全部文章数量
router.get('/blogs/getAllBlogsCount',function(req,res){
    rq("select count(*) 'total' from article").then((data)=>{
        res.send({
            success:true,
            ...data,
        })
    })
})


// 获取全部分类数量
router.get('/blogs/getAllCategory',function(req,res){
    rq("select distinct category  from article").then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})



module.exports = router
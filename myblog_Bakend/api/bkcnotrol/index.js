const express = require('express')
const router = express.Router()
const { rq } = require('../../utils/dbquery');

// 添加文章
router.post('/bk/add/post',function(req,res) {
    rq('insert into article(headerPic,tag,category,upTime,title,content) value(?,?,?,?,?,?)',
    [req.body.headerPic,req.body.tag,req.body.category,req.body.upTime,req.body.title,req.body.content]
    ).then(function(response){
        // console.log(response.affectedRows);
        if(response.affectedRows == 1){
            res.send({
                code:200
            })
        }
        else {
            res.send({
                code:401
            })
        }
    })
})

//   // 查询所有文章
// router.post('/bk/add/post',function(req,res) {
//     rq('insert into article(headerPic,tag,category,upTime,title,content) value(?,?,?,?,?,?)',
//     [req.body.headerPic,req.body.tag,req.body.category,req.body.upTime,req.body.title,req.body.content]
//     ).then(function(response) {
//         // console.log(response.affectedRows);
//         if(response.affectedRows == 1){
//             res.send({
//                 code:200
//             })
//         }
//         else {
//             res.send({
//                 code:401
//             })
//         }
//     })
//   })

// 获取全部文章
router.get('/bk/article/getall', function(req,res){
    rq("select * from article order by upTime desc").then((data)=>{
        res.send({
            success:true,
            data,
        })
    })
})

// 修改文章
router.post('/bk/article/remake', function(req,res){
    const body = req.body;
    rq("update article set headerPic = ?,title = ?,category = ?,tag = ?, upTime = ?, content = ? where _id = ?",
    [body.headerPic,body.title,body.category,body.tag,body.upTime,body.content,parseInt(body.id)]).then((response)=>{
        if(response.affectedRows == 1){
            res.status(200).send({
                code:200
            })
        }
        else {
            res.status(200).send({
                code:401
            })
        }
    })
})

// 删除文章
router.delete('/bk/article/delete',function(req,res) {
    rq("delete from article where _id = ?",[req.body.id]).then(response =>{
        if(response.affectedRows == 1){
            res.status(200).send({
                code:200
            })
        }
        else {
            res.status(200).send({
                code:401
            })
        }
    })
})

module.exports = router
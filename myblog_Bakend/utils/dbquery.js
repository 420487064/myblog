//封装查询
const db = require('./Connect')

function rq(sql,paras) {
    
    return  new Promise ((resolve,reject) =>{
        db.query(sql,paras,(err,res) =>{
            if (err) {
                reject(err)
            }else {
                resolve(res)
            }
        })
    })
}

module.exports =  { rq }
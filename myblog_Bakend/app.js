const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
const jwt  = require('./utils/jwt.js')
const expressJWT = require('express-jwt')


app.use(function(req,res,next) {
  // 设置跨域响应头
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  if(req.method == "OPTIONS"){
    res.end()
    return
  }
  next()
})

app.use(expressJWT({secret:jwt.key,algorithms:['HS256'],}).unless({path:/^\/api\//}))

app.all('*', async function (req, res, next) {
  let url = req.url.split('/')
  console.log(req.user);
  if (url[2] == 'bk') {
    try {
      let token =  req.headers.authorization
      const data = await jwt.verify(token,jwt.key)
    } catch (error) {
       res.status(401).send({
          msg:'请重新登录'
       })
    }
  }
    next()
})


const router = require('./api/index.js');
app.use(router)



app.listen(3000,()=>{
    console.log("Server is listening .....");
})
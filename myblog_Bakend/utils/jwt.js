const jwt = require('jsonwebtoken')
const { promisify } = require('util');
// 密钥
const key = 'web26-jwt'

// 续签
let meg ; 

// 产生token方法
// function signf(info) {
//   // 载体
//   let payload = info
//   meg = info
//   // 密钥
//   let secretOrPrivateKey = key
//   //  配置,7天有效期
//   let options = { expiresIn: 86400 * 7 * 7 }
//   return jwt.sign(payload, secretOrPrivateKey, options)
// }
const sign = promisify(jwt.sign)
 
//  续签
function retoken() {
    
}

// 验证token
// function vverify(token) {
//   return jwt.verify(token, key) 
// }
const verify = promisify(jwt.verify)
 
module.exports = { sign, verify, retoken, key }
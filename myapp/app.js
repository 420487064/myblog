const express = require('express')
const app = express()


const db = require('./connect')

//************************************注册登录*****************************************************/

//*******************************注册 √
//顾客
app.get("/c_register", function(req,res){

    db.query("select * from customers where phone = ?  ",[req.query.phone],(err,data) =>{    
        if(err){
            throw err
        }
        if(data.length!==0){
            res.send("用户已注册！")
        }
        else{
            db.query("insert into customers(name,phone,password) values (?,?,?) ",[req.query.c_name,req.query.phone,req.query.password],(err,data) =>{
                if(err){
                    throw err
                }
               res.send({
                   success:true,
                   
               })
            })

            }
        })
  
    })
//商家
    app.get("/b_register", function(req,res){

        db.query("select * from businesses where phone = ?  ",[req.query.phone],(err,data) =>{    
            if(err){
                throw err
            }
            if(data.length!==0){
                res.send("商家已注册！")
            }
            else{
                db.query("insert into customers(name,address,phone,password) values (?,?,?,?) ",[req.query.b_name,req.query.address,req.query.phone,req.query.password],(err,data) =>{
                    if(err){
                        throw err
                    }
                   res.send({
                       success:true,
                       
                   })
                })
    
                }
            })
      
        })




//******************************登录 √
//用户
app.get("/c_login", function(req,res){
   
    db.query("select * from customers where phone = ? and password = ? ",[req.query.phone,req.query.password],(err,data) =>{    
        if(err){
            throw err
        }
        if(data.length==0){
            res.send("用户名或密码错误！")
        }
        else{
            res.send({
                success:true,
               
            })
        }
       
    })
})

//商家
app.get("/b_login", function(req,res){
   
    db.query("select * from businesses where phone = ? and password = ? ",[req.query.phone,req.query.password],(err,data) =>{    
        if(err){
            throw err
        }
        if(data.length==0){
            res.send("用户名或密码错误！")
        }
        else{
            res.send({
                success:true,
               
            })
        }
       
    })
})


//************************************注册登录*****************************************************/




//************************************用户*****************************************************/

//**************************点餐页面*************************/

//查询商店所有的商品信息 √
app.get('/api/allgoods',  function(req,res){
    
    db.query("select * from goods where business_id = ?  ",[req.query.business_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//按商品类别查询所有的商品信息  √
app.get('/api/somegoods',  function(req,res){
    
    db.query("select * from goods where business_id = ? and type_id = ? ",[req.query.business_id,req.query.type_id],(err,data) =>{    //type：奶茶类型
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})


//**************************点餐商品的详情选择窗口 ***********/

//查询选中商品的信息  √
app.get('/api/selection',  function(req,res){
    
    db.query("select * from goods where id = ? ",[req.query.good_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})



//**************************结算界面 **********************/

//插入订单信息(商品id，顾客id，冰度，甜度，数量，消费，订单状态)
app.get('/api/add_order',  function(req,res){
    
    db.query("insert into orders(customer_id,good_id,ice_level,sugar_level,number,cost) values (?,?,?,?,?,?) ",
    [req.query.customer_id,req.query.good_id,req.query.ice_level,req.query.sugar_level,req.query.number,req.query.cost],
    (err,data) =>{
       if(err){
           throw err
       }
      res.send({
        success:true
          
      })
   })
}) 



//**************************订单界面 **********************/

//查询已完成订单  √
app.get('/api/order_after',  function(req,res){
    
    db.query("select * from orders where customer_id = ? and state = '已完成'",[req.query.customer_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//查询已退款订单   √
app.get('/api/order_cancel',  function(req,res){
    
    db.query("select * from orders where customer_id = ? and state = '已退款'",[req.query.customer_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//查询已接单订单   √
app.get('/api/order_cancel',  function(req,res){
    
    db.query("select * from orders where customer_id = ? and state = '已接单'",[req.query.customer_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//查询详细的订单信息   √
app.get('/api/order_details',  function(req,res){
    db.query("select * from order_details where 订单编号 = ? ",[req.query.order_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//**************************我的界面 **********************/

//查询我的基本信息 √
app.get('/api/my_infomation',  function(req,res){
    
    db.query("select * from customers where customer_id ",[req.query.customer_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})



//查询我在App上的总花销 √
app.get('/api/my_totalcost',  function(req,res){
    
    db.query("SELECT SUM(cost) FROM orders,goods  WHERE state <> '已退款' and orders.good_id=goods.id  AND customer_id = ? ",[req.query.customer_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})

//查询我在某店的消费金额 √
app.get('/api/my_cost',  function(req,res){
    
    db.query("SELECT SUM(cost) FROM orders,goods  WHERE state <> '已退款' and orders.good_id=goods.id AND goods.business_id = ? AND customer_id = ? ",[req.query.customer_id,req.query.business_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})



//**************************购物车界面 *********************/

//查询订单的信息



//************************************用户*****************************************************/







//************************************商家*****************************************************/

//修改商店信息  √
app.get('/api/change_business',  function(req,res){
    
    db.query("update businesses set name = ?, phone = ?, address = ? where id = ? ",[req.query.b_name,req.query.phone,req.query.address,req.query.business_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
      })
   })
})

//添加商品 √
app.get('/api/add_good',  function(req,res){
    
    db.query("insert into goods(name,image,price,business_id,type_id) values (?,?,?,?,?) ",
    [req.query.g_name,req.query.image,req.query.price,req.query.business_id,req.query.type_id],
    (err,data) =>{
       if(err){
           throw err
       }
      res.send({
          success:true,
      })
   })
}) 

//修改商品信息  √
app.get('/api/update_good',  function(req,res){
    
    db.query("update goods set name = ?,image = ?, price = ?, type_id = ? where id = ?   ",
    [req.query.g_name,req.query.image,req.query.price,req.query.type_id,req.query.good_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
      })
   })
})

//删除商品  √
app.get('/api/delete_good',  function(req,res){
    
    db.query("delete from goods where id = ? ",[req.query.good_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
      })
   })
})

//完成订单 √
app.get('/api/receive_order',  function(req,res){
    
    db.query("update orders set state = '已完成' where id = ? and state = '已接单' ",[req.query.order_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
      })
   })
})

//退款订单 √
app.get('/api/receive_order',  function(req,res){
    
    db.query("update orders set state = '已退款' where id = ? and state = '已接单' ",[req.query.order_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          
          success:true
      })
   })
})

//查看营业额  √
app.get('/api/turnover',  function(req,res){
    
    db.query("SELECT SUM(cost) FROM orders,goods  WHERE state = '已完成' and orders.good_id=goods.id AND goods.business_id = ?  ",[req.query.business_id],(err,data) =>{    
       if(err){
           throw err
       }
      res.send({
          success:true,
          data:data
      })
   })
})


//************************************商家*****************************************************/



app.listen(3000,()=>{
    console.log("Server is listening .....");
})
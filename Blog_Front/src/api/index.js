import axios from "@/utils/axios";

// 添加文章
export const addcontent = function (data) {
   return new Promise((resolve) => {
      axios({ url:'/bk/add/post',method:'post', data }).then(
         function (response) {
            resolve(response.data)
         }
      )
   })
}

// 全部文章
export const alltitle = function () {
   return new Promise((resolve) => {
      axios({
         url:'/bk/article/getall'
      }).then(
         function (response) {
            resolve(response.data.data)
         }
      )
   })
}

// 修改文章
export const articleremake = function (data) {
   return new Promise((resolve) => {
      axios({
         url:'/bk/article/remake',
         method:'post',
         data
      }).then(
         function (response) {
            resolve(response.data)
         }
      )
   })
}

// 修改文章
export const articlerdelete = function (data) {
   return new Promise((resolve) => {
      axios({
         url:'/bk/article/delete',
         method:'delete',
         data
      }).then(
         function (response) {
            resolve(response.data)
         }
      )
   })
}

// 登录
export const login = function(data){
   return new Promise((resolve) => {
      axios({
         url:'/api/user/id',
         data,
         method:'post'
      }).then(
         function (response) {
            resolve(response.data)
         },function (err) {
            console.log("err",err);
         }
      )
   })
}
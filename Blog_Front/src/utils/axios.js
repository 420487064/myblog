import axios from 'axios'
import Vue from 'vue'
import router from '../router';

// create an axios instance
const service = axios.create({
  // baseURL: 'http://127.0.0.1:3000', // url = base url + request url
  baseURL: 'http://localhost:3000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})


service.interceptors.request.use(
  function (config) {
    console.log("request");
      const token = Vue.$cookies.get('token');
      console.log('token',token);
      if(token){
        config.headers['Authorization'] = 'Bearer '+ token
      }
      return config
  },function (err) {
    console.log(err);
  }
)

service.interceptors.response.use(
  function (response) {
    return response
  },async function(err) {
    console.dir("res err",err);
    if(err.response.status === 401){
      router.push('/login')
    }
  }
)
 
export default service

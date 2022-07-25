//对axios二次封装
import store from "@/store"
import axios from "axios"

//利用axios对象的方法create，创建一个axios实例
//request就是axios
const request = axios.create({
  //配置对象
  //基础路径，发请求时自动在路径中添加
  baseURL: "",
  //超时5s
  timeout: 5000,
})

//请求拦截器：发请求之前，请求拦截器可以检测到
request.interceptors.request.use((config) => {
  //config:配置对象，其中有一个重要属性，headers请求头
  //携带token给服务器
  if (store.state.user.token) {
    console.log('发送token')
    config.headers.Authorization = store.state.user.token;
  }
  return config;
})

//响应拦截器
request.interceptors.response.use((res) => {
  //成功的回调函数：服务器返回数据后，响应拦截器可以检测到
  console.log(res.data)
  return res.data;
}, (err) => {
  //响应失败的回调
  console.log(err.response.data)
  return err.response.data;
})

export default request;
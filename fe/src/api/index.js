//当前模块进行api统一管理
import request from '@/api/request';

//注册
export const reqUserRegister = (data) => request({
  url: `/users/register`,
  data,
  method: 'post'
})

//登录
export const reqUserLogin = (data) => reques({
  url: `/users/login`,
  data,
  method: 'post'
})
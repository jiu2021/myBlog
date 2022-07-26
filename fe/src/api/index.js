//当前模块进行api统一管理
import request from '@/api/request';

/*用户api*/
//注册
export const reqUserRegister = (data) => request({
  url: `/users/register`,
  data,
  method: 'post'
});

//登录
export const reqUserLogin = (data) => request({
  url: `/users/login`,
  data,
  method: 'post'
});

//获取用户信息
export const reqUserInfo = () => request({
  url: `/users/getUserInfo`,
  method: 'get'
});

/*博客api*/
//获取博客列表
export const reqBlogList = (data) => request({
  url: `/blogs?pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
  method: 'get'
});

//阅读博客
export const reqBlog = (data) => request({
  url: `/blogs/read/${data.id}`,
  method: 'get'
});

/*标签api*/
//获取标签列表
export const reqTagList = () => request({
  url: `/tags`,
  method: 'get'
});
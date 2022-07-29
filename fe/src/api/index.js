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

//访问博客
export const reqBlog = (data) => request({
  url: `/blogs/read/${data.id}`,
  method: 'get'
});

//查找博客
export const reqSearch = (data) => request({
  url: `/blogs/search/${data.key}`,
  method: 'get'
});

//发布博客
export const reqUpload = (data) => request({
  url: `/blogs/upload`,
  data,
  method: 'post'
});

//编辑博客
export const reqEdit = (id, data) => request({
  url: `/blogs/${id}`,
  data,
  method: 'put'
});

//删除博客
export const reqDelete = (data) => request({
  url: `/blogs/${data.id}`,
  method: 'delete'
});


/*标签api*/
//获取标签列表
export const reqTagList = () => request({
  url: `/tags`,
  method: 'get'
});

//标签查找
export const reqSearchByTag = (data) => request({
  url: `/tags/${data.id}`,
  method: 'get'
});
module.exports = {
  userFormatError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExisted: {
    code: '10002',
    message: '账户已被注册',
    result: '',
  },
  userRegisterError: {
    code: '10003',
    message: '用户注册出错',
    result: '',
  },
  userDoesNotExist: {
    code: '10004',
    message: '账户不存在',
    result: ''
  },
  passwordError: {
    code: '10005',
    message: '密码错误',
    result: ''
  },
  userLoginError: {
    code: '10006',
    message: '登陆失败',
    result: ''
  },
  tokenExpireError: {
    code: '10100',
    message: '登录过期',
    result: ''
  },
  invalidToken: {
    code: '10101',
    message: 'token无效',
    result: ''
  },
  hasNotAdminPermission: {
    code: '10102',
    message: '无管理员权限',
    result: ''
  },
  getBlogsListError: {
    code: '10201',
    message: '获取博客列表失败',
    result: ''
  },
  addBlogError: {
    code: '10202',
    message: '创建博客失败',
    result: ''
  }
}
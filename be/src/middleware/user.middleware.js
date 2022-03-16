const bcrypt = require('bcryptjs');

const { userFormatError, userAlreadyExisted, userRegisterError } = require('../constant/err.type');
const { getUserInfo } = require('../service/user.service');
const userValidator = async(ctx, next) => {
  const { username, password, account, passwordVerify } = ctx.request.body;
  // 合法性
  if (!username || !password || !account || !passwordVerify || password !== passwordVerify || !(/^1[0-9]{10}$/.test(account))) {
    console.error('输入不合法', ctx.request.body);
    ctx.app.emit('error', userFormatError, ctx);
    return
  }
  await next();
}

const verifyUser = async(ctx, next) => {
  const { account } = ctx.request.body;
  // 合理性
  try {
    // @ts-ignore
    const res = await getUserInfo({ account });
    if (res) {
      ctx.body = userAlreadyExisted;
      ctx.body.code = 400;
      console.error('账户已经存在', { account });
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err);
    ctx.app.emit('error', userRegisterError, ctx);
    return
  }
  await next();
}

//加密
const cryptPassword = async(ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(9);
  // hash保存的是密文
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
}

module.exports = {
  userValidator,
  cryptPassword,
  verifyUser
}
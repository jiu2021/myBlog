const bcrypt = require('bcryptjs');

const { userFormatError } = require('../constant/err.type');
const userValidator = async(ctx, next) => {
  const { username, password } = ctx.request.body;
  // 合法性
  if (!username || !password) {
    console.error('用户名或密码为空', ctx.request.body);
    ctx.app.emit('error', userFormatError, ctx);
    return
  }
  await next();
}


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
  cryptPassword
}
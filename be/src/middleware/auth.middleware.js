const jwt = require('jsonwebtoken');

// @ts-ignore
const { JWT_SECRET } = require('../config/config.default');

const { tokenExpireError, invalidToken, hasNotAdminPermission, formatError } = require('../constant/err.type');

const auth = async(ctx, next) => {
  const { authorization = '' } = ctx.request.header;
  const token = authorization.replace('Bearer ', '');
  try {
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        {
          console.error('token已过期', err);
          return ctx.app.emit('error', tokenExpireError, ctx);
        }
      case 'JsonWebTokenError':
        {
          console.error('无效的token', err);
          return ctx.app.emit('error', invalidToken, ctx);
        }
    }
  }

  await next();
}

const hadAdminPermission = async(ctx, next) => {
  const { isAdmin } = ctx.state.user._doc;
  if (!isAdmin) {
    console.error('该用户没有管理员权限', ctx.state.user._doc);
    return ctx.app.emit('error', hasNotAdminPermission, ctx);
  }

  await next();
}

const validator = (rules) => {
  return async(ctx, next) => {
    try {
      ctx.verifyParams(rules);
    } catch (err) {
      console.error('数据格式错误', err);
      formatError.result = err;
      return ctx.app.emit('error', formatError, ctx);
    }
    await next();
  }
}

module.exports = {
  auth,
  hadAdminPermission,
  validator
}
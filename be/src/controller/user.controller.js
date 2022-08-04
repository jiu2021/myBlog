const jwt = require('jsonwebtoken');

const { creatUser, getUserInfo } = require('../service/user.service');
const { userRegisterError, userLoginError } = require('../constant/err.type');
class UserController {
  async register(ctx) {
    const { username, password, account } = ctx.request.body;
    try {
      const res = await creatUser({ username, password, account });
      ctx.body = {
        code: 200,
        message: '用户注册成功',
        data: {
          username: res.username,
        }
      };
    } catch (err) {
      console.error('用户注册失败', err);
      ctx.app.emit('error', userRegisterError, ctx);
    }
  }

  async login(ctx) {
    const { account } = ctx.request.body;
    //获取用户信息
    try {
      //剔除密码信息
      // @ts-ignore
      const { password, ...res } = await getUserInfo({ account });
      ctx.body = {
        code: 200,
        message: '用户登录成功',
        data: {
          token: jwt.sign(res, `${process.env.JWT_SECRET}`, { expiresIn: '1d' })
        }
      }
    } catch (err) {
      console.error('用户登录失败', err);
      ctx.app.emit('error', userLoginError, ctx);
    }
  }

  async userInfo(ctx) {
      const { password, ...res } = ctx.state.user._doc;
      ctx.body = {
        code: 200,
        message: '获取用户信息成功',
        data: res
      }
    }
    /*async changePassword(ctx, next) {
        //获取数据
        const id = ctx.state.user._doc._id;
        const user_name = ctx.state.user._doc.user_name;
        const password = ctx.request.body.password;
        //修改密码
        try {
          // @ts-ignore
          const res = await updateById({ id, user_name, password });
          ctx.body = {
            code: 0,
            message: '修改密码成功',
            result: '',
          }
        } catch (err) {
          console.error('修改密码失败', err);
          ctx.app.emit('error', updatePasswordError, ctx);
        }

        await next();
      }*/
}

module.exports = new UserController();
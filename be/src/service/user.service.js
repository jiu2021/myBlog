const User = require('../model/user.model');

class UserService {
  async creatUser(userInfo) {
    const res = await User.create(userInfo);
    return res;
  }

  async getUserInfo({ id, username, password, is_admin, account }) {
    const whereOpt = {};
    account && Object.assign(whereOpt, { account });
    id && Object.assign(whereOpt, { id });
    username && Object.assign(whereOpt, { username });
    password && Object.assign(whereOpt, { password });
    is_admin && Object.assign(whereOpt, { is_admin });

    const res = await User.findOne(whereOpt).exec();
    return res ? res : null;
  }

  /*async updateById({ id, user_name, password }) {
    const whereOpt = { id, user_name };

    const res = await User.updateOne(whereOpt, { "password": password });
    return res;
  }*/
}

module.exports = new UserService();
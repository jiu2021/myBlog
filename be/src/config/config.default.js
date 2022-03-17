const dotenv = require('dotenv')
  //读取根目录中的.env文件，将配置写到process.env中
dotenv.config()
module.exports = process.env
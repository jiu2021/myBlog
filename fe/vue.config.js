module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    }
  },
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  /*devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8000',
      }
    }
  }*/
}
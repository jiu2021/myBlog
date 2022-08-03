// 工具函数
export const switchPage = (that, page) => {
  let router = '';
  switch (page) {
    case '文章':
      router = '/home'
      break;
    case '关于我':
      router = '/about'
      break;
  }
  if (router) {
    that.$router.push(router);
  }
}
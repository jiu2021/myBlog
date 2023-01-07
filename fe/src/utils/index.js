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
    case '简历':
      goResume();
      //that.$tip({ tipInfo: '制作中！' });
      break;
  }
  if (router) {
    that.$router.push(router);
  }
}

function goResume() {
  const url = 'http://resume.jiu99.online/';
  window.open(url);
}
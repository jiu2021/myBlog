<template>
  <div id="footer">
    <a href="#" class="link">
      <img src="http://www.xiong35.cn/assets/github.b35d1929.svg" /> 本博客GitHub地址
    </a>
    <a href="#" class="link">鄂ICP备xxxxxxx号-1</a>
    <a href="#" class="link">
      <img src="http://www.xiong35.cn/assets/%E5%85%AC%E5%AE%89.a20583c8.png" /> 鄂公网安备 xxxxxxxxx号
    </a>
    <div>请使用 Edge 或 Chrome 访问以获得最佳体验</div>
  </div>
</template>

<script>
export default {
  name:"Footer",
  data() {
    return {
      searchKey:'',
    }
  }
}
</script>

<style scoped>
/*页脚样式*/

#footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 70px auto;
  font-size: 14px;
  color: #b1b1b1;
}

#footer a {
  text-decoration: none;
  color: #b1b1b1;
}

.link:hover {
  text-decoration: underline!important;
}

#footer a:nth-child(2) {
  margin-top: 0.8rem;
  color: rgb(177, 177, 177);
}

#footer a:nth-child(3) {
  margin-bottom: 0.8rem;
  color: rgb(177, 177, 177);
}

#footer a img {
  width: 14px;
}


/*页脚样式*/
</style>
<template>
  <div id="footer">
    <a href="https://github.com/jiu2021" target="_blank" class="link">
      <img src="@/assets/svg/github.svg" /> 本博客GitHub地址
    </a>
    <a href="https://beian.miit.gov.cn" target="_blank" class="link">皖ICP备2022011914号-1</a>
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102004964" class="link">
      <img src="@/assets/images/gongan.png" /> 鄂公网安备 42011102004964号
    </a>
    <div>请使用 Edge 或 Chrome 访问以获得最佳体验</div>
  </div>
</template>

<script>
export default {
  name:"Footer"
}
</script>

<style scoped>
/*页脚样式*/

#footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 14px;
  color: #b1b1b1;
  padding-bottom: 4rem;
  padding-top: 4rem;
}

#footer a {
  text-decoration: none;
  color: #b1b1b1;
}

#footer > .link:hover {
  text-decoration: underline;
  color: var(--primary);
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
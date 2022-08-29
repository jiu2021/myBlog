<template>
  <div id="footer">
    <div class="other-page">
      其他主页：
      <a href="https://blog.csdn.net/kj_2020" target="_blank" class="link">
        <img src="@/assets/svg/csdn.svg" alt="CSDN" />CSDN
      </a>|
      <a href="https://github.com/jiu2021" target="_blank" class="link">
        <img src="@/assets/svg/github.svg" alt="github" />github
      </a>|
      <a href="https://juejin.cn/user/308341407511406" target="_blank" class="link">
        <img src="@/assets/svg/juejin.svg" alt="juejin" />
      </a>
    </div>
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
.other-page {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.other-page a {
  display: flex;
  justify-content: center;
  padding: 0 .5rem;
}
#footer a {
  text-decoration: none;
  color: #b1b1b1;
}
#footer a:hover {
  color: var(--primary);
  text-decoration: underline;
}
#footer > .link:hover {
  text-decoration: underline;
  color: var(--primary);
}

#footer a img {
  height: 1rem;
}

/*页脚样式*/
</style>
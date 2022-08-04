<template>
  <div id="about-wrapper">
    <transition name="slide-fade">
      <div id="aboutME">
        <div id="headPortrait">
          <div id="portraitImg">
            <img src="@/assets/images/portrait.jpg" />
          </div>
          <div id="portrait-decoretion"></div>
        </div>
        <div id="readME">
          <span id="text-content" ref="textContent"></span>
        </div>
        <div class="button-container">
          <Buttons content ='文章' @click.native="goPage('文章')"></Buttons>
          <Buttons content ='简历' @click.native="goPage('简历')"></Buttons>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { switchPage } from '@/utils';
export default {
 name:"About",
  data() {
    return {
      timer:{}
    }
  },
  mounted() {
    let text = '<p>Welcome to<h2>jiu。’Blog<p>Contact me: { <p>email:1358940365@qq.com<p>github:https://github.com/jiu2021<p>}'
    var i = 0;
      this.timer = setInterval(() => {
      if(i < text.length+1) {
      let str = text.substr(0,i);
      this.$refs.textContent.innerHTML = str+'_';
      i++;
      }
    }, 200);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    goPage(page) {
      switchPage(this, page);
    }
  }
}
</script>

<style scoped>
/*aboutME*/

#about-wrapper {
  width: 100vw;
  height: 100vh;
}

#aboutME {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #202022;
  width: 100%;
  height: 100%;
}

#headPortrait {
  position: relative;
  width: 150px;
  height: 150px;
  padding: 5vh;
}

#portraitImg {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#portraitImg img {
  border-radius: 520px;
  width: 90%;
  height: 90%;
  margin: auto 0;
}

#portrait-decoretion {
  position: absolute;
  top: 15%;
  left: 15%;
  bottom: 15%;
  right: 15%;
  border: 1px solid transparent;
  border-top: 1px solid #08ffea;
  border-bottom: 1px solid #08ffea;
  border-radius: 520px;
  animation: rotate infinite linear;
  animation-duration: 5s;
}

#portrait-decoretion::before,
#portrait-decoretion::after {
  content: "";
  position: absolute;
  border: 1px solid transparent;
  border-radius: 520px;
  animation: rotate infinite linear;
  animation-duration: 5s;
}

#portrait-decoretion::before {
  top: -5%;
  left: -5%;
  bottom: -5%;
  right: -5%;
  border-left: 1px solid #00dffc;
  animation-duration: 10s;
  animation-delay: -2s;
}

#portrait-decoretion::after {
  top: -10%;
  left: -10%;
  bottom: -10%;
  right: -10%;
  border-right: 1px solid #00dffc;
  animation-duration: 7s;
  animation-delay: -5s;
}

#readME {
  margin-top: 3rem;
  background-color: #101011;
  width: 380px;
  max-width: 90vw;
  padding: 1em 2em;
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
}

#text-content {
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  line-height: 1.5rem;
}
#text-content /deep/ p {
  font-size: 1rem;
  text-align: left;
}
#text-content /deep/ h2 {
  font-size: 20px;
  color: #00dffc;
}
#text-content /deep/ h2>p{
  font-size: 14px;
  text-align: left;
  color: white;
}
#aboutME .button-container {
  margin-top: 2.5rem;
  width: 380px;
  display: flex;
}

@keyframes rotate {
  0% {}
  100% {
    transform: rotate(360deg);
  }
}

/*vue过渡*/

.slide-fade-enter-active {
  transition: all .8s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
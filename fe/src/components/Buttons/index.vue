<template>
  <div class="button-container">
    <button class="buttons" @click="goPage()" @mouseover="mouseReverse()" @mouseleave="mouseRecover()">
      <span class="bt-content">{{content}}</span>
      <div class="bt-decoration-a"></div>
      <div class="bt-decoration-b"></div>
      <div class="bt-decoration-c"></div>
    </button>
  </div>
</template>

<script>
export default {
 name:"Buttons",
 props:['content'],
 methods:{
   goPage() {
     let router = '';
     switch (this.content)
     {
       case '文章':router = '/home'
       break;
       case '关于我':router = '/about'
       break;
     }
     if(router) {
      this.$router.push(router);
     }
   },
   mouseReverse() {
     this.$bus.$emit('mouseReverse');
   },
   mouseRecover() {
     this.$bus.$emit('mouseRecover');
   },
   showMask(){
     this.$bus.$emit('showMask');
   }
 }
}
</script>

<style scoped>
/*按钮样式**/

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: transparent;
}

.buttons {
  display: flex;
  align-items: center;
  position: relative;
  height: 2.4rem;
  font-size: 1rem;
  border: 1px solid #00dffc;
  background-color: transparent;
  outline: none;
  color: #00dffc;
  transition: 0.2s ease;
  z-index: 1;
  cursor: none;
}

.bt-content {
  height: 100%;
  line-height: 2.4rem;
  padding: 0 1rem;
}

.buttons:hover {
  background-color: #000;
  color: rgb(32, 32, 34);
}

.buttons:hover .bt-content {
  mix-blend-mode: difference;
  background-color: #00dffc;
  color: #202022;
}

.buttons:hover .bt-decoration-a,
.buttons:hover .bt-decoration-b,
.buttons:hover .bt-decoration-c {
  display: block;
}

.buttons::before,
.buttons::after {
  position: absolute;
  content: "";
  height: 1rem;
  width: 2rem;
}

.buttons::before {
  top: 2px;
  left: -3px;
  border-top: #00dffc 1px solid;
  border-left: #00dffc 1px solid;
}

.buttons::after {
  bottom: 2px;
  right: -3px;
  border-bottom: #00dffc 1px solid;
  border-right: #00dffc 1px solid;
}

.bt-decoration-a,
.bt-decoration-b,
.bt-decoration-c {
  display: none;
  position: absolute;
  border: #00dffc 1px solid;
  z-index: -1;
  background-color: transparent;
}

.bt-decoration-a {
  width: 1rem;
  height: 1rem;
  top: -0.4rem;
  left: -0.5rem;
  animation: shake-bt-a 6s linear infinite;
}

.bt-decoration-b {
  width: 0.5rem;
  height: 0.5rem;
  top: 0.7rem;
  right: -0.4rem;
  animation: shake-bt-b 6s linear infinite;
}

.bt-decoration-c {
  width: 1.2rem;
  height: 0.3rem;
  left: 40%;
  bottom: -0.1rem;
  animation: shake-bt-c 6s linear infinite;
}

@keyframes shake-bt-a {
  0% {
    width: 1rem;
    height: 1rem;
  }
  50% {
    width: 0.8rem;
    height: 0.8rem;
  }
  100% {
    width: 1rem;
    height: 1rem;
  }
}

@keyframes shake-bt-b {
  0% {
    width: 0.5rem;
    height: 0.5rem;
  }
  50% {
    width: 0.4rem;
    height: 0.4rem;
  }
  100% {
    width: 0.5rem;
    height: 0.5rem;
  }
}

@keyframes shake-bt-c {
  0% {
    width: 1.2rem;
    height: 0.3rem;
  }
  50% {
    width: 1rem;
    height: 0.2rem;
  }
  100% {
    width: 1.2rem;
    height: 0.3rem;
  }
}

/*按钮样式**/

</style>
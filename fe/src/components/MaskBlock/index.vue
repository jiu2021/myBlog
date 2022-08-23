<template>
  <div id="mask-wrapper" ref="maskWrapper">
    <div v-for="n in 150" :key="n" class="mask-block" ref="eachMaskBlock"></div>
  </div>
</template>

<script>
export default {
  name: "MaskBlock",
  data() {
    return {
      timer1: null,
      timer2: null,
      timer3: null,
    }
  },
  mounted() {
    this.$bus.$on('showMask',(e)=>this.showMask(e));
  },
  methods:{
    showMask(e) {
      this.timer1 && clearTimeout(this.timer1);
      this.timer2 && clearTimeout(this.timer2);
      this.timer3 && clearTimeout(this.timer3);

      const maskBlocks = this.$refs.eachMaskBlock
      const mask = this.$refs.maskWrapper;
      for (let i = 0; i < maskBlocks.length; i++) {
        maskBlocks[i].style.top = this.getMousePos(e).y + 'px';
        maskBlocks[i].style.left = this.getMousePos(e).x + 'px';
        maskBlocks[i].style.display = 'block';
      }
      mask.style.display = 'block';

      // -5-95的随机序列
      let arr = this.getRandNumArr();
      this.timer1 = setTimeout(() => {
        for (let i = 0; i < maskBlocks.length; i++) {
          i < 100 ? maskBlocks[i].style.top = arr[i] + '%' : maskBlocks[i].style.top = arr[Math.floor(Math.random() * 100)] + '%';
          i < 100 ? maskBlocks[i].style.left = arr[99 - i] + '%' : maskBlocks[i].style.left = arr[Math.floor(Math.random() * 100)] + '%';
          let degValue = Math.round(Math.random() * 360);
          maskBlocks[i].style.setProperty("--rotate-deg", degValue + 'deg');
        }
      }, 0);

      this.timer2 = setTimeout(() => {
        for (let i = 0; i < maskBlocks.length; i++) {
          maskBlocks[i].style.top = -1000 + 'px';
        }
        this.timer3 = setTimeout(() => {
          for (let i = 0; i < maskBlocks.length; i++) {
            maskBlocks[i].style.display = 'none';
          }
          mask.style.display = 'none';
        }, 1000);
      }, 1000);
    },
    //获取鼠标位置
    getMousePos(event) {
      let e = event || window.event;
      return { "x": e.clientX, "y": e.clientY };
    },
    getRandNumArr() {
      let arr = Array.from({ length: 100 }, (v, k) => k - 5);
      return arr.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }
}
</script>

<style scoped>
/*遮罩层*/

#mask-wrapper {
  display: none;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.mask-block {
  display: none;
  position: fixed;
  width: 20vmin;
  height: 20vmin;
  background-color: #202022;
  border: 1px solid #00dffc;
  z-index: 80;
  transform: rotate(var(--rotate-deg));
  transition: 0.6s ease-out;
}


/*遮罩层*/
</style>
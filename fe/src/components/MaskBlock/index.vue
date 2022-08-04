<template>
  <div id="mask-wrapper" ref="maskWrapper">
    <div v-for="n in 150" :key="n" class="mask-block" ref="eachMaskBlock"></div>
  </div>
</template>

<script>
export default {
  name:"MaskBlock",
  mounted() {
    this.$bus.$on('showMask',()=>this.showMask());
  },
  methods:{
    showMask() {
      const maskBlocks = this.$refs.eachMaskBlock
      const mask = this.$refs.maskWrapper;
      for (let i = 0; i < maskBlocks.length; i++) {
        maskBlocks[i].style.top = this.getMousePos().y + 'px';
        maskBlocks[i].style.left = this.getMousePos().x + 'px';
        maskBlocks[i].style.display = 'block';
      }
      mask.style.display = 'block';
  
      setTimeout(() => {
        let topArr = [];
        let leftArr = [];
        for (let i = 0; i < maskBlocks.length; i++) {
          let topValue = Math.round(Math.random() * 100 - 5);
          let leftValue = Math.round(Math.random() * 100 - 5);
          maskBlocks[i].style.top = topValue + '%';
          maskBlocks[i].style.left = leftValue + '%';
          let degValue = Math.round(Math.random() * 360);
          maskBlocks[i].style.setProperty("--rotate-deg", degValue + 'deg');
        }
      }, 0);

      setTimeout(() => {
        for (let i = 0; i < maskBlocks.length; i++) {
          maskBlocks[i].style.top = -1000 + 'px';
        }
        setTimeout(() => {
          for (let i = 0; i < maskBlocks.length; i++) {
            maskBlocks[i].style.display = 'none';
          }
          mask.style.display = 'none';
        }, 1000);
      }, 1000);
    },
    //获取鼠标位置
    getMousePos(event) {
      var e = event || window.event;
      return { "x": e.clientX, "y": e.clientY };
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
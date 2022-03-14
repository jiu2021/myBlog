<template>
  <div id="mouse-DIY" ref = 'mouse'></div>
</template>

<script>
export default {
name:"MouseDIY",
mounted() {
  const mouse = this.$refs.mouse;
  this.$bus.$on("mouseReverse",()=>{
    mouse.classList.add('hovering');
  });
  this.$bus.$on("mouseRecover",()=>{
    mouse.classList.remove('hovering');
  })
  this.mouseMove();
},
methods:{
    //自定义鼠标
  mouseMove() {
    const mouse = this.$refs.mouse;
    addEventListener('mousemove', () => {
      mouse.style.top = this.getMousePos().y + 'px';
      mouse.style.left = this.getMousePos().x + 'px';
    })
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
/*自定义鼠标*/

#mouse-DIY {
  width: 100px;
  height: 100px;
  clip-path: polygon(0 0, 21px 20px, 12.7px 21px, 7px 28px);
  background-color: #00dffc;
  position: fixed;
  mix-blend-mode: difference;
  transform-origin: 0 0;
  z-index: 90;
  transition: transform .3s;
}

.hovering {
  transform: rotateY(180deg);
}

/*自定义鼠标*/
</style>
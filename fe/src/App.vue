<template>
  <div id="app" @mousemove="mousemove">
    <router-view></router-view>
    <MouseDIY/>
    <MaskBlock/>
  </div>
</template>

<script>
import MouseDIY from '@/components/MouseDIY'
import MaskBlock from '@/components/MaskBlock'

export default {
  name: 'App',
  components: {
    MouseDIY,
    MaskBlock
  },
  data() {
    return {
      event: null,
    }
  },
  methods: {
    mousemove(e) {
      this.event = e;
    }
  },
  watch:{
    $route: {
      handler: function (val, oldVal) {
        this.$bus.$emit('showMask', this.event);
      }
    }
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  /*height: 100%;*/
  min-height: 100vh;
  position: relative;
}

</style>

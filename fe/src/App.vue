<template>
  <div id="app">
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
    MouseDIY,MaskBlock
  },
  mounted() {
  },
  methods:{
  },
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}

</style>

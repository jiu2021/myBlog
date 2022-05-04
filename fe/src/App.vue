<template>
  <div id="app">
    <router-view></router-view>
    <MouseDIY/>
    <MaskBlock/>
    <TipBox v-if="isShowBox" :boxData="boxData"/>
  </div>
</template>

<script>
import MouseDIY from '@/components/MouseDIY'
import MaskBlock from '@/components/MaskBlock'
import TipBox from '@/components/TipBox'

export default {
  name: 'App',
  data() {
    return {
      isShowBox:false,
      boxData:{}
    }
  },
  components: {
    MouseDIY,MaskBlock,TipBox
  },
  mounted() {
    this.$bus.$on('showTipBox',(boxData)=>{
      this.boxData = boxData;
      this.isShowBox = true;
    });

    this.$bus.$on('closeTipBox',()=>{
      this.isShowBox = false;
    });
  },
  methods:{
  },
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}

</style>

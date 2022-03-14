<template>
  <div class="tags" @mouseover="mouseReverse()" @mouseleave="mouseRecover()" @click="showMask()">
    标签
  </div>
</template>

<script>
export default {
  name:"Tags",
  methods:{
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
/*标签样式*/

.tags {
  display: inline-block;
  position: relative;
  padding: 0.15em 0.25em;
  margin-bottom: 0.5em;
  border: solid 1px #08ffea;
  border-radius: 100px;
  font-size: 14px;
  color: #08ffea;
}

.tags::after {
  content: "";
  position: absolute;
  background-color: #08ffea;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 100px;
  transition: 0.2s ease;
}

.tags:hover::after {
  opacity: 0.15;
}

/*标签样式*/
</style>
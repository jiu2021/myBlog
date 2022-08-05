<template>
  <div class="tags" @mouseover="mouseReverse()" @mouseleave="mouseRecover()">
    {{name}}
    <span class="num">{{num}}</span>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props:['name','num'],
  methods:{
  mouseReverse() {
     this.$bus.$emit('mouseReverse');
   },
   mouseRecover() {
     this.$bus.$emit('mouseRecover');
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
.num {
  display: none;
}
/*标签样式*/
</style>
<template>
  <div id="menu">
    <Buttons content = '关于我'/>
    <Buttons content = '文章'/>
    <Buttons content = '简历'/>
  </div>
</template>

<script>
export default {
  name:"Nav",
}
</script>

<style scoped>
#menu {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-basis: 150px;
  padding-top: 4rem;
}
</style>
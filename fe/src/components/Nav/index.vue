<template>
  <div id="menu">
    <Buttons content = '关于我'/>
    <Buttons content = '文章'/>
    <Buttons content = '简历'/>
    <Buttons content = '发布文章' v-show="isShowPub" @click.native="goPub()"/>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      isShowPub:false
    }
  },
  methods: {
    goPub() {
      this.$router.push('blogpub');
    }
  },
  watch: {
    "$store.state.user.userInfo": {
      immediate:true,
      deep: true,
      handler: function (newValue) {
        if (newValue && newValue.isAdmin) {
          this.isShowPub = true;
        } else {
          this.isShowPub = false;
        }
      }
    }
  }
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
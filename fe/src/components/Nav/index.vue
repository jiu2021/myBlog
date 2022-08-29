<template>
  <div id="menu">
    <Buttons content = '关于我' @click.native="goPage('关于我')"/>
    <Buttons content = '文章' @click.native="goPage('文章')"/>
    <Buttons content = '简历' @click.native="goPage('简历')"/>
    <Buttons content = '发布文章' v-if="isAdmin" @click.native="goPub()"/>
  </div>
</template>

<script>
import { switchPage } from '@/utils';
export default {
  name: "Nav",
  methods: {
    goPub() {
      this.$router.push('blogpub');
    },
    goPage(page) {
      switchPage(this, page);
    }
  },
  computed:{
    isAdmin() {
        return this.$store.state.user.userInfo.isAdmin;
    },
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
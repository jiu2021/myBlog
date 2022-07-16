<template>
  <div id="home-wrapper">
    <Header/>
    <div id="main">
      <div id="menu-container">
        <Nav/>
      </div>
      <div id="blog-container">
        <router-view></router-view>
      </div>
      <div id="tag-container">
        <Tags/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  name:"Home",
  components: {
  },
  data() {
    return {
      blogview:true,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
/*主体样式*/

#home-wrapper {
  background-color: #202022;
}

#main {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 50px;
}

#menu-container {
  flex-basis: 150px;
}

#blog-container {
  flex: 1 1;
  z-index: 0;
}

#tag-container {
  flex-basis: 250px;
  padding-top: 4rem;
  margin-left: 1rem;
}


/*主体样式*/
</style>
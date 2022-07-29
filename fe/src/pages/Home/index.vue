<template>
  <div id="home-wrapper">
    <Header />
    <div id="main">
      <div id="menu-container">
        <Nav/>
      </div>
      <div id="blog-container">
        <router-view></router-view>
      </div>
      <div id="tag-container">
        <ul class="tag-content">
          <li v-for="(tag,index) in tagList" :key="index" class="tag" @click="goSearch(index)"> 
            <Tags :name="tag.name" :num="tag.blog_ids.length"/>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name:"Home",
  data() {
    return {
      tagList:[],
      blogview:true,
    }
  },
  async mounted() {
    await this.$store.dispatch('getTagList');
    this.tagList = this.$store.state.tag.tagList;
  },
  methods: {
    goSearch(index) {
      this.$router.push({ path: `/tag/${index}` });
    }
  }
}
</script>

<style scoped>
/*主体样式*/

#home-wrapper {
  min-height: 100vh;
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

.tag {
  display: inline-block;
  margin-right: .2rem;
}
.tag /deep/ .num {
  display: inline-block;
}

@media screen and (max-width: 750px) {
  #menu-container,
  #tag-container {
    display: none;
  }
  #main {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
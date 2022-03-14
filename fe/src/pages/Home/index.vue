<template>
  <div id="home-wrapper"> 
    <Header/>
    <div id="main">
      <div id="menu-container">
        <Nav/>
      </div>
      <div id="blog-container">
        <div id="top-title">文章列表</div>
        <Blogs/>
        <Blogs/>
        <Blogs/>
      </div>
      <div id="tag-container">
        <Tags/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Blogs from '@/pages/Home/Blogs'
export default {
name:"Home",
  components: {
    Blogs
  }
}
</script>

<style scoped>
/*主体样式*/

#home-wrapper {
  background-color: #202022;
  height: 100%;
}

#top-title {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: 1000;
  color: white;
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
}

#tag-container {
  flex-basis: 250px;
  padding-top: 4rem;
  margin-left: 1rem;
}


/*主体样式*/
</style>
<template>
  <div>
    <div id="top-title">文章列表</div>
    <ul>
      <li v-for="n in 20" :key="n">
        <Blog @click.native="readBlog()"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Blog from "@/components/Blog/Blog.vue"
export default {
  name: "BlogList",
  components: {
    Blog
  },
  methods: {
    readBlog() {
      console.log(this.$router);
      this.blogview = false;
      this.$router.push({
        name: "blogview",
        params: {
          id:1
        }
      });
    }
  }
}
</script>

<style>
  #top-title {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    font-weight: 1000;
    color: white;
  }
</style>
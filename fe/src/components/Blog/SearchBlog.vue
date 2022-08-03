<template>
  <div class="list-wrapper" ref="pageTop">
    <div id="top-title" v-if="curPage.pageName === 'key'">关键字“{{curPage.search}}”检索结果：</div>
    <div id="top-title" v-else>标签“{{curPage.tagName}}”检索结果：</div>
    <ul>
      <li v-for="(blog,index) in blogList" :key="index">
        <Blog @click.native="readBlog(index)" :blog="blog"/>
      </li>
    </ul>
    <div class="pagination">
      <div>
        <Buttons :content="`共${blogList.length}篇文章`"/>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog/Blog.vue"
import Buttons from "../Buttons/index.vue";
export default {
  name: "SearchBlog",
  components: {
    Blog,
    Buttons
  },
  data() {
    return {
      blogList: [],
      curPage: {
        pageName: '',
        search: '',
        tagName:''
      }
    }
  },
  methods: {
    readBlog(index) {
      // 阅读博客
      const id = this.blogList[index]._id;
      this.$router.push({ name: "blogview", params: { id } });
      this.$store.dispatch('readBlog', id);
    },
    scrollTop() {
      // 定位到博客列表顶部
      const pageTop = this.$refs.pageTop;
      window.scrollTo({
        top: pageTop.offsetTop,
        behavior: "smooth",
      });
    },
    async searchKey() {
      if (this.curPage.pageName == 'key') {
        const key = this.curPage.search;
        await this.$store.dispatch('searchBlogList', key);
      } else {
        const id = this.curPage.search;
        await this.$store.dispatch('searchBlogListOfTag', id);
      }
    }
  },
  computed: {
  },
  watch: {
    // 监听并刷新博客列表
    "$store.state.blog.blogList": {
      deep: true,
      immediate: true,
      handler(newValue) {
        const that = this;
        that.blogList = [];
        this.$nextTick(() => {
          that.blogList = newValue;
        });
      }
    },
    "$route.fullPath": {
      immediate: true,
      handler(newValue) {
        if (newValue.slice(0,7) == '/search') {
          this.curPage.pageName = 'key';
          this.curPage.search = this.$route.params.key;
        }
        else if (newValue.slice(0, 4) == '/tag') {
          this.curPage.pageName = 'tag';
          const index = this.$route.params.index
          const tag = this.$store.state.tag.tagList[index];
          this.curPage.search = tag._id;
          this.curPage.tagName = tag.name;
        }
        this.searchKey();
      }
    }
  }
}
</script>

<style scoped lang="css">
  #top-title {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    font-weight: 1000;
    color: white;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
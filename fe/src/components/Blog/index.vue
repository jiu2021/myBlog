<template>
  <div class="list-wrapper">
    <div id="top-title">文章列表</div>
    <ul>
      <li v-for="(blog,index) in blogList" :key="index">
        <Blog @click.native="readBlog(index)" :blog="blog"/>
      </li>
    </ul>
    <div class="pagination">
      <div>
        <Buttons :content="`第${pageNum}页，共${Math.ceil(total/pageSize)}页`"/>
      </div>
      <div class="btns">
        <Buttons content="上一页" class="btn" @click.native = "goBlogPage(false)"/>
        <Buttons content="下一页" class="btn" @click.native = "goBlogPage(true)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog/Blog.vue"
import Buttons from "../Buttons/index.vue";
export default {
  name: "BlogList",
  components: {
    Blog,
    Buttons
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      total: 999,
      blogList: [],
    }
  },
  async mounted() {
    this.pageNum = this.$store.state.blog.pageNum;
    this.pageSize = this.$store.state.blog.pageSize;
    this.total = this.$store.state.blog.total;
    //console.log(this.pageNum, this.pageSize);
    await this.$store.dispatch('getBlogList', { pageNum: this.pageNum, pageSize: this.pageSize });
  },
  methods: {
    async goBlogPage(value) {
      const pageSize = this.pageSize;
      const total = this.total;
      let goPageNum = value ? this.pageNum + 1 : this.pageNum - 1;
      //console.log(goPageNum);
      if (goPageNum > 0 && goPageNum < total / pageSize + 1) {
        this.pageNum = goPageNum;
        await this.$store.dispatch('getBlogList', { pageNum: this.pageNum, pageSize });
        this.scrollTop();
      } else {
        this.$tip({ tipInfo: '没有更多博客啦！' });
      }
    },
    async readBlog(index) {
      // 阅读博客
      const id = this.blogList[index]._id;
      await this.$store.dispatch('readBlog', id);
      this.$router.push({ name: "blogview", params: { id } });
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    display: flex;
  }
  .btn {
    margin-left: 1rem ;
  }
</style>
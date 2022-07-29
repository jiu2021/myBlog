<template>
  <div class="blogedit-wrapper">
    <Header/>
    <div class="form-wrapper">
      <div class="blog-form">
        <div class="title-tags">
          <div class="inputer">
            <span>文章标题：</span>
            <input type="text" class="title-input" v-model="blogInfo.title"/>
          </div>
          <div class="inputer">
            <span>文章标签：</span>
            <input type="text" class="tags-input" v-model="tagString"/>
          </div>
        </div>
        <div class="abstract">
          <div class="inputer">
            <span>文章摘要：</span>
            <textarea type="text" class="abstract-input" rows="2" v-model="blogInfo.abstract"/>
          </div>
        </div>
      </div>
    </div>
    <Markdown :config="config" :blogInfo="blogInfo" class="md" @getContent="getContent"/>
    <div class="btn">
      <Buttons content="返回" @click.native="goBack()"/>
      <Buttons content="确认" @click.native="submit()"/>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown";
export default {
  name:"BlogEdit",
  components:{
    Markdown,
  },
  data() {
    return {
      blogInfo: {
        title: '',
        content: '',
        abstract: '',
        tags:[],
      },
      tagString: '',
      blog_id:'',
      config: {
        subfield: true,// 单双栏模式
        defaultOpen: 'preview',
        editable: true,
        toolbarsFlag: true,
        scrollStyle: true
      }
    }
  },
  mounted() {
    // 博客编辑页面还原光标
    this.$bus.$emit('useMouse');
    // 前往编辑博客，通过路由传参
    console.log(this.$route.params.blog);
    this.blogInfo = this.$route.params.blog ? this.$route.params.blog : this.blogInfo;
    console.log(this.blogInfo);
    this.tagString = this.blogInfo.tags.toString();
  },
  destroyed() {
    this.$bus.$emit('useMouse');
  },
  methods: {
    async submit() {
      this.blogInfo.tags = this.tagString.split(',');
      const that = this;
      if (this.$route.name == 'blogpub') {
        const blog = this.blogInfo;
        this.$tip({
          tipInfo:'是否确认提交',
          cancelBtn:true,
          async confirm() {
            that.blog_id = await that.$store.dispatch('pubBlog', blog);
          },
          cancel() {
            console.log('取消');
          }
        });
      } else {
        const blog = this.blogInfo;
        const id = this.$store.state.blog.blogInfo._id;
        this.$tip({
          tipInfo:'是否确认提交',
          cancelBtn:true,
          async confirm() {
            that.blog_id = id;
            await that.$store.dispatch('editBlog', { id, blog });
          },
          cancel() {
            console.log('取消');
          }
        });
      }
      console.log(this.$route);
    },
    goBack() {
      if (this.blog_id != '') {
        this.$store.dispatch('readBlog', this.blog_id);
      }
      this.$router.go(-1);
    },
    // 给markdown绑定自定义事件，获取实时编辑值
    getContent(newContent) {
      this.blogInfo.content = newContent;
    }
  }
}
</script>

<style scoped>
.blogedit-wrapper {
  background-color: var(--bg);
  height: auto;
}
.form-wrapper {
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  background-color:#353536;
  color: var(--font-color);
}
.blog-form {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 1rem 1rem;
}

input {
  height: 1.8rem;
  border: 1px solid var(--font-color);
  outline: none;
  background-color: #202022;
  color: white;
}
textarea {
  width: 100%;
  line-height: 2rem;
  border: 1px solid var(--font-color);
  outline: none;
  background-color: #202022;
  color: white;
}
.inputer {
  display: flex;
  align-items: center;
  padding: .5rem 0;
  font-size: .8rem;
}

.title-tags {
  display: flex;
  justify-content: space-between;
}
.title-input {
  width: 10rem;
  margin-right: 1rem;
}
.tags-input {
  width: 20rem;
}
.abstract span {
  white-space: nowrap;
}
.md {
  width: 90%;
  margin: 0 auto;
}
.md /deep/ .markdown-body {
  width: 100%;
  z-index: 0;
  background-color: var(--bg);
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
}
.btn /deep/ .buttons {
  cursor: default;
}
</style>
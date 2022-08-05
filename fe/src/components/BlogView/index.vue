<template>
  <div class="blogview-wrapper">
    <div class="blogview-header">
      <div class="blog-title">
        <div class="title-content" ref="titleContent">{{blogInfo.title}}</div>
        <div class="view-nums">
          <img src="@/assets/svg/hot.svg" class="view" />
          <span class="nums">{{blogInfo.visited}}</span>
        </div>
      </div>
      <div class="blog-information">
        <ul class="tag-content">
          <li v-for="(tag,index) in blogInfo.tags" :key="index" class="tag"> 
            <Tags :name="tag"/>
          </li>
        </ul>
        <div class="date-content">{{blogInfo.date}}</div>
      </div>
    </div>
    <Markdown :config="config" :blogInfo="blogInfo" />
    <div class="blogview-footer">
      <Buttons content = '编辑' @click.native="edit()"/>
      <Buttons content = '删除' @click.native="remove()"/>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown";
import Tags from "@/components/Tags";
export default {
  name:"BlogView",
  components:{
    Markdown,
    Tags,
  },
  data() {
    return {
      index:0,
      blogInfo: {
        title: '',
        content: '',
        abstract: '',
        tags:[],
      },
      config:{
        subfield: false,// 单双栏模式
        defaultOpen: "preview",//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      }
    }
  }, 
  mounted() {
    this.scrollTop();
  },
  methods: {
    edit() {
      // 深拷贝，防止引用传参产生问题（奇怪，为什么模板数据改变会修改vuex）
      let { title, content, tags, abstract } = this.blogInfo;
      let blog = { title, content, tags, abstract };
      //const blog = this.blogInfo;
      let user = this.$store.state.user;
      if (user.userInfo && user.userInfo.isAdmin) {
        this.$router.push({
          name: "blogedit",
          params: {
            blog
          }
        });
      }
      else {
        this.$tip({tipInfo: '对不起，您不是管理员'});
      }
    },
    remove() {
      let user = this.$store.state.user;
      if (user.userInfo && user.userInfo.isAdmin) {
        const id = this.$store.state.blog.blogInfo._id;
        const that = this;
        this.$tip({
          tipInfo:'是否确认删除这篇文章',
          cancelBtn:true,
          async confirm() {
            const res = await that.$store.dispatch('deleteBlog', id);
            if (res) {
              that.$tip({ tipInfo: '删除博客成功' });
            }
          },
          cancel() {
            console.log('取消');
          }
        });
      }
      else {
        this.$tip({tipInfo:'对不起，您不是管理员'});
      }
    },
      scrollTop() {
      // 定位到顶部
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  },
  watch: {
    "$store.state.blog.blogInfo": {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.blogInfo = newValue;
      }
    }
  }
}
</script>

<style scoped>
.blogview-header {
  padding: 1rem 0 .5rem 0;
}
.blogview-footer {
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
}
.blog-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: .3rem;
}

.title-content {
  position: relative;
  font-size: 1.2rem;
  font-weight: 1000;
  color: white;
}

.view-nums {
  display: flex;
  align-items: center;
}

.view {
  width: 0.8rem;
}

.nums {
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: #08ffea;
}

.blog-information {
  display: flex;
  justify-content: space-between;
}

.blog-information .tags {
  font-size: 12px;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
}

.date-content {
  font-size: 14px;
  color: #606060;
  line-height: 30px;
}

.tag {
  display: inline-block;
  margin-right: .2rem;
}
</style>
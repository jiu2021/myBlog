<template>
  <div class="blogs" @mouseover="mouseReverse()" @mouseleave="mouseRecover()" @click="showMask()">
    <div class="blog-content">
      <div class="blog-title">
        <div class="title-content" ref="titleContent">{{blog.title}}</div>
        <div class="view-nums">
          <img src="@/assets/svg/hot.svg" class="view" />
          <span class="nums">{{blog.visited}}</span>
        </div>
      </div>
      <div class="blog-outline">{{blog.abstract}}</div>
      <div class="blog-information">
        <ul class="tag-content">
          <li v-for="(tag,index) in blog.tags" :key="index" class="tag"> 
            <Tags :name="tag"/>
          </li>
        </ul>
        <div class="date-content">{{blog.date}}</div>
      </div>
    </div>
    <div class="blog-decoration">
      <div class="blog-decoration-a" ref="blogDecoA"></div>
      <div class="blog-decoration-b" ref="blogDecoB"></div>
      <div class="blog-decoration-c" ref="blogDecoC"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: function () {
        return {
          title: '标题',
          abstract:'阿萨德氯碱苏东坡你的哦啊哦VN八艘盆地不能老是拿购票人爱上高送回家呢爱狗爱很容易铁五然后呢am',
          visited: 999,
          tags: ['标签'],
          date:'2022-05-20'
          }
        }
      }
    },
    mounted() {
        this.borderBlink();
        this.titleBlink();
    },
    methods: {
        //流光边框
        borderBlink() {
            const blogDecoA = this.$refs.blogDecoA;
            const blogDecoB = this.$refs.blogDecoB;
            const blogDecoC = this.$refs.blogDecoC;
            let degValue = Math.round(Math.random() * 180);
            blogDecoA.style.setProperty("--begin-deg", degValue + "deg");
            blogDecoB.style.setProperty("--begin-deg", degValue + "deg");
            blogDecoC.style.setProperty("--begin-deg", degValue + "deg");
        },
        //标题闪烁
        titleBlink() {
            const title = this.$refs.titleContent;
            title.setAttribute("data-title", title.innerHTML);
        },
        mouseReverse() {
            this.$bus.$emit("mouseReverse");
        },
        mouseRecover() {
            this.$bus.$emit("mouseRecover");
        },
        showMask() {
            this.$bus.$emit("showMask");
        }
    }
}
</script>

<style scoped>
/*博客签样式*/


.blogs {
  position: relative;
  background-color: #353536;
  color: white;
  margin-bottom: 0.5rem;
  transition: 0.2s ease-in;
  z-index: 0;
}

.blog-title {
  display: flex;
  justify-content: space-between;
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

.blog-outline {
  /*固定文字行数，超行省略*/
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden !important;
  font-size: 0.8rem;
  color: #b1b1b1;
  margin: 0.5rem 0;
  overflow: hidden;
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

#blog-container .button-container {
  display: flex;
  width: 100%;
}

#pre-page {
  margin: 0 1rem;
}

#blog-container .button-container div {
  flex: 1;
}

.blogs:hover {
  background-color: #202022;
}

.blogs:hover .title-content::before,
.blogs:hover .title-content::after {
  content: attr(data-title);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title-content::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  animation: title-blink 0.2s infinite;
}

.title-content::after {
  left: -2px;
  text-shadow: -2px 0 #00dffc, 2px 2px #ff00c1;
  animation: title-blink 0.2s infinite alternate-reverse;
}

.tag {
  display: inline-block;
  margin-right: .2rem;
}

@keyframes title-blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}


/*流光边框*/
.blog-content {
  padding: 0.5rem 1rem;
  background-color: #353536;
  z-index:5;
}

.blogs:hover .blog-content {
    background-color: #202022;
}

.blog-decoration {
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  background-color: transparent;
  z-index: -1;
  overflow: hidden;
  transition: 0.3s;
}

.blogs:hover .blog-decoration {
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
}

.blogs:hover .blog-decoration-a,
.blogs:hover .blog-decoration-b,
.blogs:hover .blog-decoration-c {
  animation: rotate linear infinite;
}

.blog-decoration-a,
.blog-decoration-b,
.blog-decoration-c {
  background-color: #00dffc;
  position: absolute;
  width: 120%;
  padding-bottom: 120%;
  height: 0;
  top: -999px;
  bottom: -999px;
  right: -999px;
  left: -999px;
  margin: auto;
  transform: rotate(var(--begin-deg));
}

.blog-decoration-a {
  clip-path: polygon(97% 32%, 42% 72%, 0% 29%, 26% 72%);
  animation-duration: 7s!important;
}

.blog-decoration-b {
  clip-path: polygon(55% 5%, 45% 51%, 100% 60%, 24% 61%);
  animation-duration: 11s!important;
}

.blog-decoration-c {
  clip-path: polygon(83% 19%, 62% 85%, 8% 26%, 49% 79%);
  animation-duration: 9s!important;
}

@keyframes rotate {
  0% {}
  100% {
    transform: rotate(360deg);
  }
}
/*流光边框*/


/*博客签样式*/
</style>
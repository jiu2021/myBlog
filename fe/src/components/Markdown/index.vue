<template>
  <div class="md-wrapper">
    <mavon-editor 
      v-model="content" 
      :subfield="config.subfield"    
      :defaultOpen="config.defaultOpen"
      :toolbarsFlag="config.toolbarsFlag"
      :editable="config.editable"
      :scrollStyle="config.scrollStyle"
    />
  </div>
</template>

<script>
export default {
  name:"Markdown",
  props:['config','blogInfo'],
  data() {
    return {
      content: '',
      timer:null
    }
  },
  watch: {
    blogInfo: {
      //deep: true, //该对象被一整个替换时，重新渲染，单独修改时不需要渲染
      immediate: true,
      handler(newValue) {
        this.content = newValue.content;
      }
    },
    content: {
      immediate:false,
      handler(newValue) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        const that = this;
        this.timer = setTimeout(() => {
          console.log('111');
          that.$emit('getContent', newValue); // 把最新内容传给编辑组件
        }, 500);
      }
    }
  }
}
</script>

<style scoped>
  .md-wrapper {
    height: auto;
    width: 100%;
  }
  .md-wrapper /deep/ .v-show-content
  {
    background-color: var(--bg2)!important;
    color: var(--font-color)!important;
  }
  .md-wrapper /deep/ .v-note-op {
    padding: 0;
    border-radius: 0;
    border: 0;
    background-color: var(--bg2)!important;
    color: var(--font-color)!important;
  }
  .md-wrapper /deep/ .markdown-body {
    width: 100%;
    z-index: 0;
    background-color: var(--bg);
  }

  .md-wrapper /deep/ .content-input-wrapper {
    border-radius: 0;
  }
  .md-wrapper /deep/ .v-note-edit {
    background-color: rgb(255, 255, 255);
  }
  /*标题样式*/
  .markdown-body /deep/ h1,
  .markdown-body /deep/ h2,
  .markdown-body /deep/ h3,
  .markdown-body /deep/ h4,
  .markdown-body /deep/ h5,
  .markdown-body /deep/ h6
  {
    border: 0;
  }
  .markdown-body /deep/ h1::before {
    content:"";
    border-left: 5px solid #00dffc;
    margin-right: .5rem;
  }
  .markdown-body /deep/ h2::before {
    content:"";
    border-left: 4px solid #08ffea;
    margin-right: .5rem;
  }
  .markdown-body /deep/ h3::before {
    content:"";
    border-left: 3px solid #08ff6f;
    margin-right: .5rem;
  }
  .markdown-body /deep/ h4::before {
    content:"";
    border-left: 2px solid #e7e7e7;
    margin-right: .5rem;
  }
  /*列表样式*/
  .markdown-body /deep/ ul {
    list-style: disc;
  }
  .markdown-body /deep/ ol {
    list-style: decimal;
  }
  /*代码块样式*/
  .markdown-body /deep/ pre code{
    font-size: 1rem;
  }
  .markdown-body /deep/ pre .hljs {
    background-color: #f6f8fa;
  }
  /*粗体样式*/
  .markdown-body /deep/ strong {
    color: #daa5eb;
  }
  /*链接样式*/
  .markdown-body /deep/ a {
    color: var(--primary);
  }
</style>
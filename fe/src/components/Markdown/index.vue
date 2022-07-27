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
      content:'',
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
        // 把最新内容传给编辑组件
        console.log('111');
        this.$emit('getContent', newValue);
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
    height: 100vh;
  }
  /*标题样式*/
  .md-wrapper /deep/ h1,
  .md-wrapper /deep/ h2,
  .md-wrapper /deep/ h3,
  .md-wrapper /deep/ h4,
  .md-wrapper /deep/ h5,
  .md-wrapper /deep/ h6
  {
    border: 0;
  }
  .md-wrapper /deep/ h1::before {
    content:"";
    border-left: 5px solid #00dffc;
    margin-right: .5rem;
  }
  .md-wrapper /deep/ h2::before {
    content:"";
    border-left: 4px solid #08ffea;
    margin-right: .5rem;
  }
  .md-wrapper /deep/ h3::before {
    content:"";
    border-left: 3px solid #08ff6f;
    margin-right: .5rem;
  }
  .md-wrapper /deep/ h4::before {
    content:"";
    border-left: 2px solid #e7e7e7;
    margin-right: .5rem;
  }
  /*列表样式*/
  .md-wrapper /deep/ ul {
    list-style: disc;
  }
  .md-wrapper /deep/ ol {
    list-style: decimal;
  }
  /*代码块演示*/
  .md-wrapper /deep/ pre code{
    font-size: 1rem;
  }
  .md-wrapper /deep/ pre .hljs {
    background-color: #f6f8fa;
  }
</style>
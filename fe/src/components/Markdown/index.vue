<template>
  <div class="md-wrapper">
    <mavon-editor 
      v-model="data.value" 
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
  props:['config','data'],
  data() {
    return {
    }
  },
  computed: {
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
    position: fixed;
    top:49px;
    width: 90%;
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
</style>
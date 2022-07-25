<template>
  <div class="blogedit-wrapper">
    <Header/>
    <Markdown :config="config" :data="data" class="md"/>
    <Buttons content="确认" class="btn" @click.native="submit()" />
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
      data: {
        value: "# oaosdvmapsdv",
        id:"",
      },
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
    this.$bus.$emit('useMouse');
  },
  destroyed() {
    this.$bus.$emit('useMouse');
  },
  methods: {
    submit() {
      console.log(this.value);
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.blogedit-wrapper {
  background-color: var(--bg);
  height: auto;
}
.md {
  width: 90%;
  margin: 0 auto;
}
.md /deep/ .markdown-body {
  width: 100%;
  padding-top: 90px;
  z-index: 0;
  background-color: var(--bg);
}
.btn {
  padding: 1rem 0;
}
.btn /deep/ .buttons {
  cursor: default;
}
</style>
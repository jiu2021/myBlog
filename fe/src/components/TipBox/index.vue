<template>
  <div class="box-wrapper">
    <div class="box">
      <div class="box-info">
        {{boxData.tips}}
      </div>
      <div class="box-btn">
        <Buttons content ='确定' @click.native="closeBox()"/>
        <Buttons content='取消' @click.native="cancel()" v-show="boxData.mode == 'confirm'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"TipBox",
  props:['boxData'],
  mounted() {
  },
  methods:{
    closeBox() {
      this.$bus.$emit('closeTipBox');
    },
    cancel() {
      console.log('取消');
      this.$bus.$emit('closeTipBox');
    }
  }
}
</script>

<style>
  .box-wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .box {
    display: flex;
    flex-flow: column;
    align-self: center;
    width:300px;
    background-color:#353536;
    color: #00dffc;
    border: 1px solid #00dffc;
  }

  .box-info {
    font-size: 1rem;
    text-align: center;
    margin: 1.5rem 0;
  }

  .box-btn {
    display: flex;
    justify-content: space-around;
  }
</style>
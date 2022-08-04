<template>
  <div class="box-wrapper" v-if="isShow" @touchmove.prevent @mousewheel="mousewheel">
    <div class="box">
      <div class="box-info">
        {{tipInfo}}
      </div>
      <div class="box-btn">
        <Buttons content ='确定' @click.native="confirm()"/>
        <Buttons content='取消' @click.native="cancel()" v-show="cancelBtn"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"TipBox",
  props:['boxData'],
  data() {
    return {
      isShow:true,
      tipInfo:'',
      cancelBtn:false,
    }
  },
  mounted() {
  },
  methods:{
    confirm() {
      // 确定
      this.a_confirm && this.a_confirm();
      this.isShow = false;
    },
    cancel() {
      // 取消
      this.a_cancel && this.a_cancel();
      this.isShow = false;
    },
    mousewheel(e){
      e.preventDefault();
    }
  }
}
</script>

<style>
  .box-wrapper {
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 5;
  }

  .box {
    display: flex;
    flex-flow: column;
    align-self: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
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
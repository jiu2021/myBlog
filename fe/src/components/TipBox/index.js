import Vue from 'vue';
import TipBox from '@/components/TipBox/TipBox.vue'; //引入刚才写的弹框组件 
let TipConstructor = Vue.extend(TipBox); // 返回一个“扩展实例构造器” 

let TipModal = (o) => {
  let TipDom = new TipConstructor({
    el: document.createElement('div') //将TipBox组件挂载到新创建的div上 
  })
  let app = document.getElementById('app');
  app.appendChild(TipDom.$el); //把TipBox组件的dom添加到body里 

  // 提示内容
  TipDom.tipInfo = o.tipInfo;
  // 关闭按钮
  TipDom.cancelBtn = o.cancelBtn;

  // 弹框的两个事件 确定 取消
  TipDom.a_confirm = o.confirm || null;
  TipDom.a_cancel = o.cancel || null;

}
export default TipModal;
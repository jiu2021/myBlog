<template>
  <div class="blogview-wrapper">
    <div class="blogview-header">
      <div class="blog-title">
        <div class="title-content" ref="titleContent">标题</div>
        <div class="view-nums">
          <img src="@/assets/svg/hot.svg" class="view" />
          <span class="nums">110</span>
        </div>
      </div>
      <div class="blog-information">
        <div class="tag-content">
          <Tags />
        </div>
        <div class="date-content">日期</div>
      </div>
    </div>
    <Markdown :config="config" :data="data" />
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
      data: {
        value: "# asdvasdvasdvbas",
        id:"",
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
  methods: {
    edit() {
      this.$router.push({
        name: "blogedit",
        params: {
          id:"1"
        }
      })
    }
  },
  computed: {
    value() {
      return "# Vue事件修饰符\n\
\n\
## 事件处理\n\
\n\
如果需要在内联语句处理器中访问原生DOM事件。可以使用特殊变量`$event`，把它传入到`methods`中的方法中。\n\
\n\
* **`.stop`**：等同于JavaScript中的`event.stopPropagation()`，防止事件冒泡\n\
* **`.prevent`**：等同于JavaScript中的`event.preventDefault()`，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）\n\
* **`.capture`**：与事件冒泡的方向相反，事件捕获由外到内\n\
* **`.self`**：只会触发自己范围内的事件，不包含子元素\n\
* **`.once`**：只会触发一次\n\
* **`.passive`** :告诉浏览器你不想阻止事件的默认行为\n\
\n\
## 键盘修饰符\n\
\n\
在JavaScript事件中除了前面所说的事件，还有键盘事件，也经常需要监测常见的键值。在Vue中允许`v-on`在监听键盘事件时添加关键修饰符。记住所有的`keyCode`比较困难，所以Vue为最常用的键盘事件提供了别名：\n\
\n\
- **`.enter`**：回车键\n\
- **`.tab`**：制表键\n\
- **`.delete`**：含`delete`和`backspace`键\n\
- **`.esc`**：返回键\n\
- **`.space`**: 空格键\n\
- **`.up`**：向上键\n\
- **`.down`**：向下键\n\
- **`.left`**：向左键\n\
- **`.right`**：向右键\n\
\n\
## 鼠标修饰符\n\
\n\
鼠标修饰符用来限制处理程序监听特定的滑鼠按键。常见的有：\n\
\n\
- **`.left`**：鼠标左键\n\
- **`.middle`**：鼠标中间滚轮\n\
- **`.right`**：鼠标右键\n\
\n\
## 修饰键\n\
\n\
可以用如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应：\n\
\n\
- **`.ctrl`**\n\
\n\
- **`.alt`**\n\
\n\
- **`.shift`**\n\
\n\
- **`.meta`**\n\
\n\
  \n\
\n\
## 自定义按键修饰符别名\n\
\n\
在Vue中可以通过`config.keyCodes`自定义按键修饰符别名。例如，由于预先定义了`keycode 116`（即`F5`）的别名为`f5`，因此在文字输入框中按下`F5`，会触发`prompt`方法，出现`alert`。\n\
\n\
```\n\
<!-- HTML -->\n\
"
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

</style>
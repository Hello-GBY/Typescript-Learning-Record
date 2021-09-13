//  Volar 插件  Vetur插件

//  1.vue-cil创建 vue3项目 脚手架 要是4.5.0 以上
vue create my-project
//  第二种 使用 vite 创建
npm init vite-app <project-name>

// 根标签 可以多个了



setup函数
setUp(props, context){
  // props 是父组件传递过来的数据
  // context 上下文对象
  /**
   * 解构 context
   * {attrs, slots, emit}
   */
}

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    setup(props, {attrs, slots, emit}){

    }
  })
</script>


ref 
返回响应式数据

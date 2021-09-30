// ** Volar 插件  Vetur插件

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


ref()
返回响应式数据
const value = ref(0)

reactive()
定义多个数据的响应式，接收一个普通对象返回该普通对象的响应式代理
const value2 = reactive({
  name: 'guoguo',
  age: 23,
  wife: {
    name: 'gongzuo'
  }
})


computed()
返回一个ref类型的对象

const first = compute(() => {
  return 'xxx'
})

// 相当于 只是get操作
const scented = compute(()=>{
  get() {
    return ''
  }
  set(val: string){
    ...
  }
})

// 钩子函数变了
前面加上on


// 父子传递数据
provide inject

// 瞬移 
{/* < teleport to='body'>
to = '#endofbody'
// suspense 不确定的
<teleport to='body'>
  a
</teleport>
<teleport to='body'>
  b
</teleport>
多个挂载会在同一个追加上去 */}

// 片段
在组件中支持多个跟标签了，即片段

// 自定义事件
不同组件和prop，事件名不存在任何自动化的大小写转换。
this.$emit('myEvent');
@my-event  // 这样并不能触发事件
事件名称必须完全一样了

// script setup 语法糖

// 跨组件通讯mitt.js

// toRefs
将响应式对象转换为普通对象，对象中的每个键值对就是 ref
 对于reactive()
const user  = reactive({
  name: '你好'
})

如果用扩展运算符 展开 就不是响应式数据了
return {
 ...user // 就不是响应式的了
}

 用 toRefs 响应式的了

 toRefs(user)

 return  {
   ...user
 }

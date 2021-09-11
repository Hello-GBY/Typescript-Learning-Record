/**
 * 接口的作用：
 *  定义标准、定义一种规范 只是定义不实现，类是定义并实现
 *  关键字： implement (实现)
 *  
 * 
 * 接口的类型：
 *  可索引接口
 *  函数接口
 *  类类型接口
 *  属性类接口
 *  接口的扩展
 */

// 属性接口
interface FullName {
  firstName: '',
  secondName?: ''
}

// 函数类型接口
interface encrypt{
  (name: string, value: string): string
}

var myFunc:encrypt= function(v1, v2){
  console.log('v1, v2: ', v1, v2);
  return ''
}

// 可索引接口 对 对象 和数组进行约束 不常用
 // 对数组进行约束
interface userArr{
  [index: number]: string
} // index 不能 家引号
var arr:userArr = ['1','2','3'];
console.log('arr[0]: ', arr[0]);
  // 对对象进行约束
interface userObj {
  [index: string]: string
}
var obj:userObj = {
  'name': 'da',
  'age': '123'
}

// 类类型接口 对类进行约束 只是定义  定义方法时没有具体的实现
interface userClass {
  name:string,
  eat(val: string):string
}

class Bard implements userClass {
  name: string,
  constructor(name:string) {
    this.name = name;
  }
  eat(val: string) {
    return this.name + '会吃:' + val
  }
}
// 接口扩展  接口继承  接口继承接口  extends

myFunc( 'haha', 'xixi')


// 接口：可选属性
interface obj {
  name: string,
  value?: number
}

function setObj(val: obj) {

}
// 参数的顺序可以不一样
setObj({
  name:'XiXi',
  value: 123
});

// 参数的可传可不传
setObj({
  name:'XiXi'
});


// 封装 ajax
// 设置接口
interface config {
  url: string, 
  methods: string, 
  body:string,
  headers: string
}

function ajax (config: config){
  let {url, methods, body, headers} = {...config}
  // let xml = new XMLHttpRequest();
}

console.log('asdf')
// alert(1);


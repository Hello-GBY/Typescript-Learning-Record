/**
 * ts 中的数据类型
 *  number
 *  string
 *  array
 *  void 
 *  any
 *  null 和 undefined
 *  never 
 *  enum  枚举
 *  tuple 元数组
 *  对象类型
 */
// 数据基本类型
let t_1: string = '123'
let t_2: number = 123
let t_3: boolean = false
let t_4: any   // 定义之后可以存放任意类型的值
let t_5: void  // 用于方法的返回值，代表没有返回值
let t_6: undefined | null = null
interface t_7 {
    name: string,
    age: number,
}
enum t_8  {
    name = 'XXX',
    age = '18'
}
type t_9 = {
    name: string,
    age: number
}
// 注意
let throwRes2: never; 
let tupleArr2:[number, string, number]; // 元组
let arrNew: string[] = ['q', 'w'];// let arr2: number[]
let obj_ : object = {name: 'me', age : 'X'}

// 数组类型定义
// 第一种
let arr1:number[]
arr1 = [1,2];
// 第二种
let arr2:Array<number>
arr2=[1,3];

// 元数组类型
let arr3:[number, string, number]
arr3=[1,'1',1];

// 枚举类型  定义表示符的 键值对 
enum Flag { 
  success = 1,
  error = 2
}
var status_:Flag = Flag.success
console.log('status: ', status_);
// 第二种情况 这样定义 取值是下标
enum Flag2 {
  blue, red, green
} 
var val:Flag2 = Flag2.blue;
console.log('val: ', val); // 1


// never 类型 代表从不会出现的值   用于接收错误处理的结果
// never 用于定义重来不会出现的类型 用于接收错误处理
let a: never;
// a=123 ; // 错误写法
a = (() => {
  throw new Error('数据处理错误')
})()

// 元组类型
// 用于定义一组已知的数组
let tupleArr:[number, string, number];


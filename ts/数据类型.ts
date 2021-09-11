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
 */


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
// 


"use strict";
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
var arr1;
arr1 = [1, 2];
// 第二种
var arr2;
arr2 = [1, 3];
// 元数组类型
var arr3;
arr3 = [1, '1', 1];
// 枚举类型  定义表示符的 键值对 
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var status_ = Flag.success;
console.log('status: ', status_);
// 

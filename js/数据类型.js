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
// 第二种情况 这样定义 取值是下标
var Flag2;
(function (Flag2) {
    Flag2[Flag2["blue"] = 0] = "blue";
    Flag2[Flag2["red"] = 1] = "red";
    Flag2[Flag2["green"] = 2] = "green";
})(Flag2 || (Flag2 = {}));
var val = Flag2.blue;
console.log('val: ', val); // 1
// never 类型 代表从不会出现的值  null 或者 undefined  类型

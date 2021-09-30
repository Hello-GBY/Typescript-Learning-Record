// 枚举基础
  // 什么是枚举
  // 枚举的类型
    // 数字枚举
    // 字符串枚举
    // 异构枚举
/**
 * 枚举基础
 *  枚举基于0 开始
 *  是所有可能取值的集合
 */
// 数字枚举
enum color {
    red = 10,
    green,  // 下标 11
}

/**
 * 通过源码可知道
 *  创建出来的是一个对象
 *  按照第一个值得下标向下拓展， 默认是0 
 */

// 字符串枚举
enum doing{
  sunday = 'paly',
  monday = 'work',
}

// 异构枚举 （将字符串和数字进行结合）
enum doing2{
  day = '10',
  num = 10
}

console.log(color.green)

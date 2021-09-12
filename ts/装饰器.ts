/**
 * 装饰器：
 *  是一种特殊的类型说明 能附加到类的声明、方法、属性或参数上、可以访问修改类的行为。
 *  常见的装饰器  类装饰器 属性装饰器 构造函数装饰器器
 */

// 装饰器 ：  类装饰器
// 1. 普通装饰器
function logClass(params: any){
  console.log('params: ', params);
  params.prototype.apiUrl = 'xxxx';
  params.prototype.run = function (){
    
  }
}
@logClass
class HttpClient{
  constructor () {}
  getData(){}
}
 
 var http = new HttpClient()

/**
 * 装饰器：
 *  是一种特殊的类型说明 能附加到类的声明、方法、属性或参数上、可以访问修改类的行为。
 *  
 */

// 装饰器 ：  类装饰器

// 
function logClass(params: string){
  // return function () {
    
  // }
}


// 装饰器
@logClass
class HttpClient{
  constructor(){

  }
  getData(){

  }
}



function logClass2(params: string){
  console.log('params: ', params);
  return function (target: any) {
    console.log('target: ', target);
  }
}
// 装饰器工厂 可传参
@logClass2('hello')
class HttpClient2{
  constructor(){}
}

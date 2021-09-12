/**
 * 装饰器：
 *  是一种特殊的类型说明 能附加到类的声明、方法、属性或参数上、可以访问修改类的行为。
 *  常见的装饰器  类装饰器 属性装饰器 构造函数装饰器器
 */

// 装饰器 ：  类装饰器
// 1. 普通装饰器。注意：参数应该是any类型的
function logClass(params: any){
  // console.log('params: ', params);
  // 给类装饰属性
  params.prototype.apiUrl = 'xxxx';
  // 给类装饰方法
  params.prototype.run = function (){};
}
@logClass
class HttpClient{
  constructor () {}
  getData(){}
}
 
 var http = new HttpClient();
//  console.log('http: ', http);

 // 2.装饰工厂 (可传递参数)
 function logClass2(params: string){
   return function(target: any) {
    //  console.log('target: ', target);
    //  console.log('params: ', params);
     target.prototype.apiUrl = 'XXX';
  }
}
@logClass2('hello')
class HttpClient2{
  constructor() {}
  getData() {}
}
 
 var http2 = new HttpClient2();
//  console.log('http: ', http2);

// 2. 属性装饰器
function propTypeSet(params: any){
  return function (target: any, attr: any) {
    // console.log('attr: ', attr);
    // console.log('target: ', target);
    target[attr] = params;
  }
}

class HttpClient3{
  @propTypeSet('https:XXX.com')
  url: string|undefined;
  constructor(){}
}

// 方法装饰器
function methodSet(target: any, method: any, dec: any){
  console.log('method: ', method);
  console.log('target: ', target);
  console.log('dec: ', dec);
  // target[method]
  // dec 是当前装饰方法
  var oldMethod = dec.value();
  dec.value = function (...args: any[] ) {
    console.log('args: ', args);
    // 处理方法
    oldMethod.apply(this,args)
  }
}

class HttpClient5{
  url: string| undefined
  constructor(url: string){
    this.url = url;
  }
  @methodSet
  get(){

  }
  set(name: string) {

  }
}

new HttpClient5('https://xxx.com');

/**
 ** 泛型就是解决 类 接口 方法的复用
 * 在成员之间提供有意义的约束
 *  成员 可以是 类 方法 类的实例 函数参数  函数返回值
 *  
 *  元组泛型接口：
 *    function newDemo01<T, U>(name: T , val: U): [T,U]{
 *      return [T,U]
 *    }
 */


 interface DB<T> {
    add(info: T):boolean;
    update(info: T):boolean;
    get(id: number):boolean;
    delete(id: number): boolean;
 }

 // 实现 mysql类  // 注意 ： 接口是传图泛型  类也需要定义泛型
 class mySql<T> implements DB<T>{
   add(info: T): boolean {
     throw new Error("Method not implemented.");
   }
   update(info: T): boolean {
     throw new Error("Method not implemented.");
   }
   get(id: number): boolean {
     throw new Error("Method not implemented.");
   }
   delete(id: number): boolean {
     throw new Error("Method not implemented.");
   }
   
 }

 // 定义 泛型实例 (use 表
 class User{
    name:string| undefined;
    age:string| undefined;
 }
 var u = new User();
 u.name = 'guoGuo';
 u.age = '21';

 let userTable = new mySql<User>();
 userTable.add(u);

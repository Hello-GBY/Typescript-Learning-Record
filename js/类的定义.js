"use strict";
/**
 * 类的定义  将数据和数据的操作封装放在一起
 *      class XXX{
 *          name: string
 *          age: number
 *          construction(name: string, age: number){
 *              this.name = name;
 *              this.age = age;
 *          }
 *      }
 *
 * 继承  直接通过其他对象的属性还和方法创建类 在进行特殊化处理
 *      关键字 extend 调用基类的 super()
 *
 * 类的修饰符
 *      public 公有的  protected 受保护的 private 私有的
 *      类里面 子类 类外部   类里、子类      类里
 *
 * 静态属性  静态方法
 *      不用创建出来实例 就能访问 ， 像 promise.all()  $.get()
 *      关键字 static 开头的 直接能访问 不用创建实例
 *
 * 多态
 *      多态是继承的一种表现形式
 *      父类定义一个方法不实现、让继承的子类去实现 每一个子类又不通的表线行驶
 *
 * 抽象类 abstract
 *      抽象方法必须在抽象类里 、 抽象方法内没有具体的实现 子类继承之后必须要实现
 *      抽象类不能被实例化
 *      abstract  class XXX{
 *          name: string
 *          age: number
 *          construction(name: string, age: number){
 *              this.name = name;
 *              this.age = age;
 *          }
 *         abstract sayHi(){ }
 *      }
*/
// 1. 类的定义 将数据和对数据的操作封装在一起
// 继承 extend 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        // alert(this.name);
        return this.name;
    };
    return Person;
}());
var p = new Person('张三');
p.getName();
/**
 *  实现继承 extends、super
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + "\u6B63\u5728\u8DD1";
    };
    return Animal;
}());
/**
 * 猫继承动物类
 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + " \u5728\u5403\u9C7C";
    };
    return Cat;
}(Animal));
var maoMao = new Cat('猫猫');
maoMao.run();
// /**
//  * 类的修饰符
//  *  public: 公有
//  *  
//  */
var Animal_2 = /** @class */ (function () {
    // 受保护的
    // protected sex: string; // 外部访问不了 只能在当前类 或者 子类 使用 
    // 私有的
    // private age: string;   // 外部访问不了 只能在当前类使用 
    function Animal_2(name) {
        this.name = name;
    }
    Animal_2.prototype.run = function () {
        return this.name + "\u6B63\u5728\u8DD1";
    };
    return Animal_2;
}());
var cat_2 = new Animal_2('猫猫');
cat_2.name;
// cat_2.sex; // 报错
// cat_2.age; // 报错

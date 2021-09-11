"use strict";
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

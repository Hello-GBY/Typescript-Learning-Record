"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function setObj(val) {
}
// 参数的顺序可以不一样
setObj({
    name: 'XiXi',
    value: 123
});
// 参数的可传可不传
setObj({
    name: 'XiXi'
});
function ajax(config) {
    var _a = __assign({}, config), url = _a.url, methods = _a.methods, body = _a.body, headers = _a.headers;
    var xml = new XMLHttpRequest();
}
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
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        alert(this.name);
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

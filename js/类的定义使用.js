"use strict";
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

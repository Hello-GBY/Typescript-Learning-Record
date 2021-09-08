class Person{
    name:string; // 属性 省略public 关键字

    constructor(n: string){ // 构造函数 实例化类的时候触发的方法
        this.name = n;
    }

    getName():string {
        alert(this.name);
        return this.name;
    }
    
}

var  p = new Person('张三');
p.getName();

/**
 *  实现继承 extends、super
 */
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(): string{
        return `${this.name}正在跑`
    }
}
/**
 * 猫继承动物类
 */
class Cat extends Animal {

    constructor(name) {
        
        super(name);
    }

    eat(): string {
        return `${this.name} 在吃鱼`
    }

    // 父类和子类有同样的方法 优先用子类的
}

var maoMao = new Cat('猫猫');
maoMao.run();



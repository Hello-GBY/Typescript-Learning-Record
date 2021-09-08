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
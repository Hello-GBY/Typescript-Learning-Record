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



class Person{
    name:string; // 属性 省略public 关键字

    constructor(n: string){ // 构造函数 实例化类的时候触发的方法
        this.name = n;
    }

    getName():string {
        // alert(this.name);
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

    constructor(name: string) {
        
        super(name);
    }

    eat(): string {
        return `${this.name} 在吃鱼`
    }

    // 父类和子类有同样的方法 优先用子类的
}

var maoMao = new Cat('猫猫');
maoMao.run();



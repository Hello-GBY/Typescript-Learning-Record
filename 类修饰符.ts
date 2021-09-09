// /**
//  * 类的修饰符
//  *  public: 公有
//  *  
//  */

 class Animal_2 {
    // 公共的
    public name: string;
    // 受保护的
    protected sex: string; // 外部访问不了 只能在当前类 或者 子类 使用 
    // 私有的
    private age: string;   // 外部访问不了 只能在当前类使用 

    constructor(name: string) {
        this.name = name;
    }

    run(): string{
        return `${this.name}正在跑`
    }
}

var cat_2 = new Animal_2('猫猫');
cat_2.name;
// cat_2.sex; // 报错
// cat_2.age; // 报错

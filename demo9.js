// function Person(name, age) {
//     this.name = name,
//         this.age = age,
//         this.play = [1, 2, 3]
//     this.setName = function () { }
// }
// Person.prototype.setAge = function () { }
// //子型別
// function Student(price) {
//     this.price = price
//     this.setScore = function () { }
// }
// // Student.prototype.sayHello = function () { }//在這裡寫子類的原型方法和屬性是無效的，
// //因為會改變原型的指向，所以應該放到重新指定之後
// Student.prototype = new Person()
// Student.prototype.sayHello = function () { }
// var s1 = new Student(15000)
// var s2 = new Student(14000)
// console.log(s1, s2)
// s1.play.push(4)
// console.log(s1.play, s2.play)
// console.log(s1.__proto__ === s2.__proto__)//true
// console.log(s1.__proto__.__proto__ === s2.__proto__.__proto__)


// method 2 (x)
// function Person(name, age) {
//     this.name = name,
//         this.age = age,
//         this.setName = function () { }
// }
// Person.prototype.setAge = function () { }
// function Student(name, age, price) {
//     Person.call(this, name, age)  // 相當於: this.Person(name, age)
//     /*this.name = name
//     this.age = age*/
//     this.price = price
// }
// var s1 = new Student('Tom', 20, 15000)
// console.log(s1.setAge())//Uncaught TypeError: s1.setAge is not a function


//method 3(x)

// function Person(name, age) {
//     this.name = name,
//         this.age = age,
//         this.setAge = function () { }
// }
// Person.prototype.setAge = function () {
//     console.log("111")
// }
// var p1 = new Person()
// function Student(name, age, price) {
//     Person.call(this, name, age)
//     this.price = price
//     this.setScore = function () { }
// }
// Student.prototype = new Person()
// Student.prototype.constructor = Student//組合繼承也是需要修復建構函式指向的
// Student.prototype.sayHello = function () { }
// var s1 = new Student('Tom', 20, 15000)
// var s2 = new Student('Jack', 22, 14000)
// console.log(s1)
// console.log(s1.constructor) //Student
// console.log(p1.constructor) //Person


// method 4(x)

// function Person(name, age) {
//     this.name = name,
//         this.age = age,
//         this.setAge = function () { }
// }
// Person.prototype.setAge = function () {
//     console.log("111")
// }
// function Student(name, age, price) {
//     Person.call(this, name, age)
//     this.price = price
//     this.setScore = function () { }
// }
// Student.prototype = Person.prototype
// Student.prototype.sayHello = function () { }
// var s1 = new Student('Tom', 20, 15000)
// console.log(s1)

// console.log(s1 instanceof Student, s1 instanceof Person)//true true
// console.log(s1.constructor) //Person

//method 5 (o)

function Person(name, age) {
    this.name = name,
        this.age = age
}
Person.prototype.setAge = function () {
    console.log("111")
}
function Student(name, age, price) {
    Person.call(this, name, age)
    this.price = price
    this.setScore = function () { }
}
Student.prototype = Object.create(Person.prototype)//核心代碼
Student.prototype.constructor = Student//核心代碼
var s1 = new Student('Tom', 20, 15000)
console.log(s1 instanceof Student, s1 instanceof Person) // true true
console.log(s1.constructor) //Student
console.log(s1)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.log = function () {
    console.log(this.name + ', age:' + this.age);
}

var nick = new Person('nick', 18);

console.log(nick instanceof Person); // true
console.log(nick instanceof Object); // true
console.log(nick instanceof Function); // false
console.log(Person instanceof Function); // false
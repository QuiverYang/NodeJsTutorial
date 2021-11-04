// function Car() {
//     this.arr = []
// }
// Car.prototype.speed = 0
// Car.prototype.number = ""
// Car.prototype.fuel = 0

// Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
// Car.prototype.isOverSpeed = function (speedLimit) { return Car.prototype.speed > speedLimit }
// function HybridCar() {
//     Car.call(this)
// }

// // HybridCar.prototype = new Car() // way1
// // HybridCar.prototype.__proto__ = Car.prototype // way2
// HybridCar.prototype = Object.create(Car.prototype);
// HybridCar.prototype.constructor = HybridCar; // add this will reflect correct type
// HybridCar.prototype.batteryLimit = 50000
// HybridCar.prototype.totalEnergy = function () {
//     return this.fuel * 21 + this.batteryLimit / 500
// }


class Car {
    constructor(arr) {
        this.arr = arr ?? [];
    }
}

class HybridCar extends Car {
    constructor(arr, name) {
        super(arr);
        this.name = name
    }
}


var myCar = new HybridCar([])
var myCar2 = new HybridCar([])
console.log(myCar.arr === myCar2.arr)
myCar.arr.push(10);
console.log(myCar.arr);
console.log(myCar2.arr);
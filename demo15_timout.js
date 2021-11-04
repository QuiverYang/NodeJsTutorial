// for (let i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i) }, 1000)
// }
// console.log("program terminated")

const Car = {
    speed: 50,
    getSpeed: function () {
        console.log("speed is", this.speed)
    },
    getSpeed2: function () {
        const catchThis = this
        setTimeout(function () {
            console.log("after 2 seconds, speed is:", catchThis.speed)
        }, 2000)
    },
    getSpeed3: function () {
        // const f = () => { console.log("[2]after 2 seconds, speed is:", this.speed) }
        // function f() { console.log("[2]after 2 seconds, speed is:", this.speed) }
        const f = function f() { console.log("[3]after 2 seconds, speed is:", this.speed) }
        setTimeout(f, 2000)
    }
}
console.log(typeof Car)
// Car.getSpeed()
// Car.getSpeed2()
Car.getSpeed3()
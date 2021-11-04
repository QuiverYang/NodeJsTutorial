//global.bread = "baguette"
//var bread = 'baguette'
bread = 'baguette'
global.coffee = 'latte'
global.juice = 'lemonade'
function logSomething(name) {
    console.time(global[name])
    console.debug(global[name])
    console.log(global[name])
    console.info(global[name])
    console.warn(global[name])
    console.error(global[name])
    console.timeEnd(global[name])

}
logSomething('coffee')
logSomething('juice')
logSomething('hello')
logSomething('bread')
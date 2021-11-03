// use uglify.js package to compress the file
// uglifyjs demo2.js -c -m --mangle-props > demo2_ugly1.js
let object1 = {"foo":1, bar:4}
object1.foo += object1.bar
console.log(object1.foo)
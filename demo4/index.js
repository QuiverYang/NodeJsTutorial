var request = require('request');
let URL1 = "https://www.uuu.com.tw"
request(URL1, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    } else {
        console.log(error)
        console.log(body)
    }
})
var m1 = "hi"
var m2 = "hi2"
var m3 = "hi3"
console.log(m1)
console.log(m2)
console.log(m3)
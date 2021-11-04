let fs = require('fs')
const FILENAME = ".\\file.txt"


console.log("program start")
fs.open(FILENAME, 'r', (error, handle) => {
    if (error) {
        return console.log(error)
    }
    console.log("file opened, continue")
    //var buffer = new Buffer(10000,0)
    var buffer = Buffer.alloc(10000)
    fs.read(handle, buffer, 0, 10000, null, (error, length) => {
        if (error) {
            return console.log(error)
        }
        const result = buffer.slice(0, length)
        console.log("data read:", result.toString())
        fs.close(handle, () => { })
    })
})
let data = fs.readFileSync(FILENAME);
console.log("readSync: " + data.toString())





console.log("----Program Terminated---")
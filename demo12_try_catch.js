function oops() {
    throw new Error("something strange happen")
}

console.log("begin something that might have exception")
try {
    oops()
} catch (e) {
    console.log('something error happen, reason:', e.toString())
    console.log(e)
}
//oops()
console.log("end of oops")
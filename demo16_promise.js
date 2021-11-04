const p = new Promise(async (resolve, reject) => {
    setTimeout(() => {
        resolve("answer")
    }, 1000)
})

p.then(result => console.log(result)).catch(error => console.log(error))
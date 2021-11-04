const arr = []
for (let i = 0; i < 10; i++) {
    arr.push(() => console.log(i))
}
arr[3]()

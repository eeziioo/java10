let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = []
arr.forEach(function (item) {
    console.log(item * 2);

    arr2.push(item * 2)
})

console.log(arr2);
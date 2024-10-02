let testArray1 = [[1, 4], [7, 10], [3, 5]];
testArray1.sort((a, b) => {
    return a[0] - b[0];
});

console.log(testArray1);
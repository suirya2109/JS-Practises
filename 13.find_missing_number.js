function findMissingNumber(arr) {

    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;

    const arrSum = arr.reduce((arr, num) => arr + num, 0);

    const totalVal = totalSum - arrSum;

    console.log(totalVal);

    // let total = arr.length + 1;
    // let num = new Set(arr);
    // for (let i = 1; i <= total; i++) {
    //     if (!num.has(i)) return i;
    // }

}

console.log(findMissingNumber([1, 4, 2, 5, 6]));
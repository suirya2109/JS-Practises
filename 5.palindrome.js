function palindrome(str) {
    function reverseStr(str) {
        reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
    const clearStr = str.toLowerCase();
    console.log(clearStr, reverseStr(str));
    return clearStr === reverseStr(str).toLowerCase();
}

console.log(palindrome('raDar'));

// function palindrome(str) {
//     clearedString = str.toLowerCase();
//     reversedString = str.split('').reverse().join('');
//     return clearedString === reversedString.toLowerCase();
// }
// console.log(palindrome('raDar'));
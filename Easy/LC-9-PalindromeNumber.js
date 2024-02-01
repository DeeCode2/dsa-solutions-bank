// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    str = x.toString();

    let head = 0;
    let tail = str.length - 1;

    while (head <= tail) {
        if (str[head] !== str[tail]) {
            return false;
        }
        head++;
        tail--;
    }
    return true
};
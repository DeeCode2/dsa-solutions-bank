//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
    let j = 0;
    let k = s.length - 1
    let l;

    while (j <= k) {
        l = s[j];
        s[j] = s[k];
        s[k] = l;

        j++;
        k--;
    }
};
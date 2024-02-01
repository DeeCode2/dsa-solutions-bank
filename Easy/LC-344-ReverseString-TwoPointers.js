/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {

    let start = 0; //pointer at start of array
    let end = s.length - 1; //pointer at end of array
    let placeholder; //temporary placeholder

    while (j <= end) {
        placeholder = s[start];
        s[start] = s[end];
        s[end] = placeholder;

        start++;
        end--;
    }
};
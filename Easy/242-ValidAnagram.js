//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {

    //CORNER CASES
    if (s.length < t.length || t.length < s.length) {
        return false
    }

    //is there a way to do it without prepopulating the map?

    //populate map w/ frequency of letters
    let map = new Map();

    //populate map with frequency of letters in magazine
    for (let letter of s) {
        //if the letter doesn't exist add it to the map with a default value of 0
        if (!map[letter]) {
            map[letter] = 0;
        }
        //increment frequency 
        map[letter]++
    }


    for (letter in t) {
        if (map[t[letter]] == undefined || map[t[letter]] == 0) {
            return false
        }

        map[t[letter]]--

    }
    
    return true
};

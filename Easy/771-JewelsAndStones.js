//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    //corner cases
    if (jewels.length == 1 && stones.length == 1) {
        if (jewels[0] === stones[0]) {
            return 1;
        }
    }

    let map = new Map();
    let sum = 0;

    for (jewel of jewels) {
        map.set(jewel, 1)
    }

    for (stone of stones) {
        if (map.has(stone)) {
            sum++
        }
    }
    return sum;
};
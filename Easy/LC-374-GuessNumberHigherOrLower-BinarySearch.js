/**
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

*/

var guessNumber = function(n) {
    let start = 1;
    let end = n;
        
    while(start < end) {
            let mp = Math.floor((start + end) / 2)
            let result = guess(mp);
            if (result === 0) {
                return mp;
            } else if (result === -1) {
                end = mp - 1; 
            } else {
                start = mp + 1;
            }
    }

    return start; 
};
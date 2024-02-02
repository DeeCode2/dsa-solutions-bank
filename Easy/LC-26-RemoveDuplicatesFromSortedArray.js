//BRIEF
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

let k=1;

     for(i=0;i<nums.length-1;i++){

         //if the current number != next number
         if(nums[i]!==nums[i+1]){

             //nums[1] = 
             nums[k]=nums[i+1];
             k++;
         }
     }
     
   return k;
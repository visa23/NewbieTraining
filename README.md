WEEK 1 

Problem Statement:

Given a lowercase string return the super reduced string by removing the adjacent duplicate characters.

Sample inputs and outputs:

"aaabccddd" = abd,
"aa" = Empty String,
"baab" = Empty String

Problem Explanation:

Let us take the first sample input and observe the sequence to reduce the string,

aaabccddd --> abccddd --> abddd --> abd



WEEK 2

Problem Statement:

You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

Sample inputs and outputs:

SAMPLE TEST CASE 1

arr  = [1, 5, 3, 4, 2],
target = 2,
output = 3

SAMPLE TEST CASE 2

arr = [363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793],
target = 1,
output = 0

SAMPLE TEST CASE 3

arr = [1, 3, 5, 8, 6, 4, 2],
target = 2,
ouput = 5

Problem Explanation:

Let's take sample test case 1, the difference between the pairs should be 2.
There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] 

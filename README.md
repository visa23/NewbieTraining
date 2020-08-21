#WEEK 1 

##Problem Statement:

Given a lowercase string return the super reduced string by removing the adjacent duplicate characters.

###Sample inputs and outputs:

"aaabccddd" = abd,
"aa" = Empty String,
"baab" = Empty String

####Problem Explanation:

Let us take the first sample input and observe the sequence to reduce the string,

aaabccddd --> abccddd --> abddd --> abd



#WEEK 2

##Problem Statement:

You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

###Sample inputs and outputs:

###SAMPLE TEST CASE 1

arr  = [1, 5, 3, 4, 2],
target = 2,
output = 3

###SAMPLE TEST CASE 2

arr = [363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793],
target = 1,
output = 0

###SAMPLE TEST CASE 3

arr = [1, 3, 5, 8, 6, 4, 2],
target = 2,
ouput = 5

####Problem Explanation:

Let's take sample test case 1, the difference between the pairs should be 2.
There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] 

#WEEK3

##Problem Statement:

String Pair

One peron hands over the list of digits to Mr.String, But Mr.String understands only strings. Within striings also he understands only vowels. Mr.String need your help to find the total number of pairs which adds upto a certain digit D.

The rules to calculate digit D are as follow

Take all digits and convert them into their textual representation

Next, sum up the number of vowels i.e.,{a,e,i,o,u} from all textual representation

This sum is digit D

Now, once digit D is known find out all unordered pairs of numbers in input whose sum is equal to D

##Constraints
1 <= N <= 100
1 <= value of each element in second line of input <= 100

Number 100, if and when it appears in input should be converted to textual representation as 'hundred' and not as 'one hundred'. Hence number of vowels in number 100 should be 2 and not 4

###SAMPLE INPUT

First Line --> N --> Integer, Number of elements to be processed as input
Second Line --> [numbers]
N --> 5
arr --. [1, 2, 3, 4, 5]

###SAMPLE OUTPUT

Number of pairs in input that sum up to digit D
Output: one

####Problem Explanation

Input: 5
[1,2,3,4,5]

1 -> one -> o,e
2 -> two -> o
3 -> three -> e,e
4 -> four -> o,u
5 -> five -> i,e

Vowels count in input = {2+1+2+2+2} = 9.
Digit, D = 9
Pairs in the lsit{1,2,3,4,5} that sum upto D=9 

Pair = {4,5}

Output : one





"use strict";
// SAMPLE TEST CASE 1
// let arr: Array<number>  = [1, 5, 3, 4, 2];
// let len = arr.length;
// let target = 2;
// SAMPLE TEST CASE 2
// let arr: Array<number>  = [363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793];
// let len = arr.length;
// let target = 1;
// SAMPLE TEST CASE 3
// let arr: Array<number>  = [1, 3, 5, 8, 6, 4, 2];
// let len = arr.length;
// let target = 2;
const pairs = (a, k) => {
    let count = 0;
    let len = a.length;
    for (let itr = 0; itr < a.length; itr++) {
        for (let inner = itr + 1; inner < a.length; inner++) {
            if (Math.abs(a[itr] - a[inner]) == target) {
                count++;
            }
        }
    }
    return count;
};
let arr = [363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793];
let target = 1;
let result = pairs(arr, target);
console.log(`The number of pairs of array elements that have a difference equal to a target value ${target} is ${result}`);

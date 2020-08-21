let N: number = 3;
let arr: number[] = [7, 4, 2];
console.log(arr);

let obj1: any = {
    0: ['z','e','r','o'],
    1: ['o', 'n', 'e'],
    2: ['t', 'w', 'o'],
    3: ['t', 'h', 'r', 'e', 'e'],
    4: ['f', 'o', 'u', 'r'],
    5: ['f', 'i', 'v', 'e'],
    6: ['s', 'i', 'x'],
    7: ['s', 'e', 'v', 'e', 'n'],
    8: ['e', 'i', 'g', 'h', 't'],
    9: ['n', 'i', 'n', 'e'],
}

let obj2: any = {
    10: ['t', 'e', 'n'],
    11: ['e', 'l', 'e', 'v', 'e', 'n'],
    12: ['t', 'w', 'e', 'l', 'v', 'e'],
    13: ['t', 'h', 'i', 'r', 't', 'e', 'e', 'n'],
    14: ['f', 'o', 'u', 'r', 't', 'e', 'e', 'n'],
    15: ['f', 'i', 'f', 't', 'e', 'e', 'n'],
    16: ['s', 'i', 'x', 't', 'e', 'e', 'n'],
    17: ['s', 'e', 'v', 'e', 'n', 't', 'e', 'e', 'n'],
    18: ['e', 'i', 'g', 'h', 't', 'e', 'e', 'n'],
    19: ['n', 'i', 'n', 'e', 't', 'e', 'e', 'n']
}

let obj3: any = {
    20: ['t', 'w', 'e', 'n', 't', 'y'],
    30: ['t', 'h', 'i', 'r', 't', 'y'],
    40: ['f', 'o', 'u', 'r', 't', 'y'],
    50: ['f', 'i', 'f', 't', 'y'],
    60: ['s', 'i', 'x', 't', 'y'],
    70: ['s', 'e', 'v', 'e', 'n', 't', 'y'],
    80: ['e', 'i', 'g', 'h', 't', 'y'],
    90: ['n', 'i', 'n', 't', 'y']
}

let obj4: any = {
    100: ['h', 'u', 'n', 'd', 'r', 'e', 'd']
}

let new_arr: any[] = [];
let ele1 = 0;
let ele2 = 0;


arr.forEach((ele) => {
    if ((ele < 10)) {
        new_arr.push(obj1[ele]);
    } else if (ele < 20 && ele > 9) {
        new_arr.push(obj2[ele]);
    } else if (ele == 100) {
        new_arr.push(obj4[ele]);
    } else if ((ele % 10 == 0) && (ele != 100) && (ele > 19)) {
        new_arr.push(obj3[ele]);
    } else if ((ele > 19) && (ele != 100) && (ele % 10 != 0)) {
        ele2 = ele % 10;
        ele1 = ele - ele2;
        new_arr.push(obj3[ele1].concat(obj1[ele2]));
    }

});

console.log(new_arr);

const isVowel = ((ch: string) => {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        return true;
    }
});

let ind = 0;
let vowel_count = [];
let sum: number = 0;

for (let outer_itr = 0; outer_itr < N; outer_itr++) {
    let len = new_arr[outer_itr].length;
    let count = 0;
    for (let inner_itr = 0; inner_itr < len; inner_itr++) {
        let res = isVowel(new_arr[outer_itr][inner_itr]);
        if (res == true) {
            count++;
        }
    }
    vowel_count[ind] = count;
    ind++;
}

console.log(vowel_count);

for (let i = 0; i < vowel_count.length; i++) {
    sum += vowel_count[i];
}

console.log(`The digit D is ${sum}`);

let pair_count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == sum) {
            pair_count++;
        }
    }
}

console.log(`The number of pairs that sums upto the digit D is ${obj1[pair_count].toString().replace(/,/g, '')}`);

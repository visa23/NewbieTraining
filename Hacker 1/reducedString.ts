
// Function to Reduce the given String

function reducedString(str: string) {

    var flag = true;
    var s = str.split('');
    
    while(flag) {
        flag = false;
        
        for(var i = 0; i < s.length; i++) {
            if (s[i] == s[i + 1]) {
                s[i] = '';
                s[i + 1] = '';
                flag = true;
            }
        }

        s = s.join('').split('');
    }

    return (s.length == 0 ? 'Empty String' : s.join(''));
} 

// Driver code
// Passing a string to the reducedString function

const res = reducedString("aaabccddd");
console.log(res);

// SAMPLE INPUT = "aa" --> OUTPUT = Empty String
// SAMPLE INPUT = "baab" --> OUTPUT = Empty String
// SAMPLE INPUT = "aaabccddd" --> OUTPUT = abd

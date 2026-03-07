//Rule: 1
// function longestCommonPrefix(a){
//     if (!a || a.length === 0) return "";
//     let prefix = "";
//     for (let i = 0; i < a[0].length; i++) {
//         const char = a[0][i];
//         for (let j = 1; j < a.length; j++) {
//             if (a[j][i] !== char) {
//                 return prefix;
//             }
//         }
//         prefix += char;
//     }
//     return prefix;
// }

// console.log(test(["flower", "hello", "flight"]));

//Rule: 2
// function longestCommonPrefix(strs) {

//     if(!strs.length) return "";

//     let prefix = strs[0];

//     for(let i = 1; i < strs.length; i++){
//         while(strs[i].indexOf(prefix) !== 0){
//             prefix = prefix.slice(0, -1);
//         }
//     }

//     return prefix;
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

function test(s){
    if(!s.length) return "";
    let prefix = s[0];
    for(let i=0; i < s.length; i++){
        while (s[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,-1);
        }
    }

    return prefix;
}

console.log(test(["flower", "fought", "flight"]));
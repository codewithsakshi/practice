// A checkbox's value is determined by the value of its direct children:
// When all children of a parent are checked, the parent should be checked.
// When some (but not all or none) children of a parent are checked, the parent should be in an indeterminate state, with a dash displayed within the box.
// When none of the children of a parent are checked, the parent is unchecked.
// If a parent checkbox is checked or unchecked, all the descendant checkboxes (not just direct children) will be updated with that new value.

const array = [3,7,2,8,15];
const target = 10;

const result = []

for(let i = 0; i < array.length; i++){

    for(let j = i+1; j < array.length; j++){
        if(array[i] + array[j] === target){
            result.push([i , j])
        }
    }
}

console.log(result)


function twoSum(nums, target){
    const map = new Map();
    const result = []
    
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)){
          result.push([map.get(complement),i]);
        }
        map.set(nums[i], i);
    }
    return result;
}


console.log(twoSum([3,7,2,8,15], 10))


// const input = ["the", "day", "is", "sunny", "the", "is", "the", "is", "sunny", "the"]
// const output = ["the", "is", "sunny", "day"];
const frequency = {}

for(let i = 0; i < input.length; i++){
    if(frequency.hasOwnProperty(input[i])){
        frequency[input[i]]++
    }else{
        frequency[input[i]] = 1
    }
}

const entries = Object.entries(frequency).sort((a, b) => b[1] - a[1]).map(entry => entry[0]);


console.log(entries);

const input = "The sky is blue";
const result = input.trim().split(" ");
const letters = []
for(let i = 0; i < result.length; i++){
    const letter = result[i].split("").reverse().join("");
    letters.push(letter)
}

//  console.log(letters.join(" "));

const splitArray = input.trim().split(" ");
const sortingViaLength = splitArray.sort((a, b) => {
    if(b.length !== a.length){
        return b.length - a.length
    }else {
        return a.localeCompare(b);
    }
});

console.log(sortingViaLength);


// function groupAnagrams(words){
//     const map = new Map();
    
//     for(let i = 0; i < words.length; i++){
//         const sorted = words[i].split("").sort().join("");
//         if(!map.has(sorted)){
//             map.set(sorted, []);
//         }
//         map.get(sorted).push(words[i]);
//     }
//     return Array.from(map.values())
// }

function groupAnagrams(words){
    const map = {};
    
    for(let i = 0; i < words.length; i++){
        const sorted = words[i].split("").sort().join("");
        if(!map.hasOwnProperty(sorted)){
            map[sorted] = [];
        }
        map[sorted].push(words[i]);
    }
    return Object.values(map)
}


const output = groupAnagrams(input);
console.log(output);

// function isIsomorphism(str1, str2){
//     if(str1.length !== str2.length) return false;
    
//     const map1 = {};
//     const map2 = {};
    
//     for(let i = 0; i < str1.length; i++){
        
//         if(map1[str1[i]] && map1[str1[i]] !== str2[i]){
//             return false
//         }
//         if(map2[str2[i]] && map2[str2[i]] !== str1[i]){
//             return false
//         }
        
//         map1[str1[i]] = str2[i];
//         map2[str2[i]] = str1[i];
//     }
//     return true
// }

const nums = [1, 2, 3, 4, 5]
function robHouse(){
if(nums.length <=1) return nums.length;

const dp = new Array(nums.length).fill(0);   
dp[0] = nums[0];
dp[1] = Math.max(nums[0], nums[1]);

for(let i = 2; i < nums.length; i++){
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i - 2]);
}
    return dp[dp.length-1]
}


console.log(robHouse())

function robHouse(){
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums){
        const temp = prev1;
        prev1 = Math.max(prev1, prev2 + num);
        prev2 = temp
    }
    return prev1
}

var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    const robLinear = (arr) => {
        let prev1 = 0, prev2 = 0;
        for (let num of arr) {
            const temp = prev1;
            prev1 = Math.max(prev1, prev2 + num);
            prev2 = temp;
        }
        return prev1;
    }

    return Math.max(
        robLinear(nums.slice(0, nums.length - 1)),
        robLinear(nums.slice(1))
    );
};

// const input = [[0, 30], [5, 10], [10, 15], [15, 16]];

// function noOfMeetingRooms(input){
//     const starts = input.map(i => i[0]).sort((a, b) => a - b);
//     const ends = input.map(i => i[1]).sort((a, b) => a - b);
    
//     let usedRooms = 0;
//     let maxRooms = 0;
//     let i = 0;
//     let j = 0;
    
//     while(i < starts.length){
//         if(starts[i] < ends[j]){
//             usedRooms++;
//             maxRooms = Math.max(maxRooms, usedRooms);
//            
//              i++
//         }else{
//             usedRooms--
//             j++
//         }
//     }
    
//     return maxRooms;
// }

// console.log(noOfMeetingRooms(input))
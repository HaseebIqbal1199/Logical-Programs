console.time("Execution Time")

var twoSum = function(nums, target) {
    var arr = [];
    var pairs = [];
    for(i=0;i<nums.length;i++)
    {
        for(j=i+1;j<nums.length;j++)
        {
            if((nums[i]+nums[j])==target)
            {
                let pair = [i, j].sort()
                let string = pair.toString();
                if(!pairs.includes(string))
                {
                    pairs.push(string)
                    arr.push(pair)
                }
            }
        }
    }
    return arr;
}

// let numbers = [3,2,4,2,3,5]
// let target = 5
// let result = twoSum(numbers,target)
// for(i=0;i<result.length;i++)
// {
//     console.log(result[i])
// }

console.timeEnd("Execution Time")
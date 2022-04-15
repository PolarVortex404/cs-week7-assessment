let addToZero = (nums) =>{
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i +1; j < nums.length; j++){
            if (nums[i] + nums[j] === 0){
                return true
            }
        }
    }
    return false
}
console.log(addToZero([1,2,3,-2]))

//O(n^2)
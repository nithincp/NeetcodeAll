var permute = function(nums){
    const output = []

    if(nums.length === 1){
        return [[...nums]]
    }

    for(let i=0;i<nums.length;i++){
        const n = nums.shift()
        const permutations = permute(nums)

        permutations.forEach((permutation) => permutation.push(n))

        output.push(...permutations)
        nums.push(n)
    }

    return output
}
// Leetcode Problem - 47

var permuteUnique = function (nums) {
  const output = [];

  if (nums.length === 1) {
    return [[...nums]];
  }

  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const n = nums.shift();
    const permutations = permuteUnique(nums);

    for (const permutation of permutations) {
      permutation.push(n);
    }

    for (const item of permutations) {
      if (
        !output.some((list) =>
          list.every((element, index) => element === item[index])
        )
      ) {
        output.push(item);
      }
    }
    nums.push(n);
  }

  return output;
};


const nums = [1,1,2]
console.log(permuteUnique(nums))
var canPartition = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr);

  if (sum % 2 !== 0) {
    return false;
  }

  const target = sum / 2;
  let dp = new Set()
  dp.add(0)

  for (let i=0;i<nums.length;i++){
    const nextDP = new Set()

    for (let t of dp){
        if (t+nums[i] === target){
            return true
        }
        nextDP.add(t+nums[i])
        nextDP.add(t)
    }
    dp = nextDP
  }

  return false
};

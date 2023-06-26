// Leetcode Problem - 1498

var numSubseq = function (nums, target) {
  const mod = Math.pow(10, 9) + 7;
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let result = 0;

  let power = [];
  power[0] = 1;
  for (let i = 1; i < nums.length; ++i) {
    power[i] = (power[i - 1] * 2) % mod;
  }

  while (left <= right) {
    while (nums[left] + nums[right] > target && left <= right) {
      right--;
    }

    if (left <= right) {
      result += power[right-left];
      result = result % mod;
    }

    left++;
  }

  return result;
};

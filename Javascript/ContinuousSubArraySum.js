// Leetcode Problem - 523

var checkSubarraySum = function (nums, k) {
  const prefixSum = new Map();
  prefixSum.set(0, -1);

  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum = (curSum + nums[i]) % k;

    if (prefixSum.has(curSum)) {
      if (i - prefixSum.get(curSum) > 1) {
        return true;
      }
    } else {
      prefixSum.set(curSum, i);
    }
  }

  return false;
};

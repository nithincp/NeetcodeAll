// Leetcode Problem - 179

var largestNumber = function () {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = String(nums[i]);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] + nums[j + 1] < nums[j + 1] + nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  if (nums[0] == 0) {
    return "0";
  }

  return nums.join("");
};

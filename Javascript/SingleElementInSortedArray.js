// Leetcode Problem - 540

var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (
      (mid - 1 < 0 || nums[mid] !== nums[mid - 1]) &&
      (mid + 1 === nums.length || nums[mid] !== nums[mid + 1])
    ) {
      return nums[mid];
    }

    let leftSize = nums[mid] === nums[mid - 1] ? mid - 1 : mid;
    if (leftSize % 2 !== 0) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

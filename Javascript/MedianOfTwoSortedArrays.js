// Leetcode Problem - 4

var findMedianSortedArrays = function (nums1, nums2) {
  const newArray = [...nums1, ...nums2];
  newArray.sort((a,b) => a-b);
  console.log(newArray)
  const lengthArray = newArray.length;
  if (lengthArray % 2 !== 0) {
    return newArray[Math.floor(lengthArray / 2)];
  } else {
    return (
      (newArray[Math.floor(lengthArray / 2)] +
        newArray[Math.floor(lengthArray / 2 - 1)]) /
      2
    );
  }
};

const nums1 = [3];
const nums2 = [-2, -1];
console.log(findMedianSortedArrays(nums1, nums2));

//Leetcode Problem - 1343

var numOfSubarrays = function (arr, k, threshold) {
  let left = 0;
  let right = k - 1;
  let count = 0
  let subArray = arr.slice(left, right);
  let totalSum = subArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  while (right<arr.length){
    totalSum += arr[right]
    let average = totalSum/k
    if (average >= threshold){
        count += 1
    }
    totalSum-=arr[left]
    left += 1
    right +=1
  }

  return count

};

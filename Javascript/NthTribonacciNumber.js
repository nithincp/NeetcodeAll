// Leetcode Problem - 1137

var tribonacci = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  tribonacciSequence = new Array(n + 1).fill(0);
  tribonacciSequence[1] = 1;
  tribonacciSequence[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    tribonacciSequence[i] =
      tribonacciSequence[i - 1] +
      tribonacciSequence[i - 2] +
      tribonacciSequence[i - 3];
  }

  return tribonacciSequence[n]
};

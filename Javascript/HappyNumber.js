// Leetcode Problem - 202

var isHappy = function (n) {
  const hashSet = new Set();

  while (n !== 1 && !hashSet.has(n)) {
    hashSet.add(n)
    const digits = Array.from(String(n), Number);
    
    let sum = 0;
    for (element of digits) {
      sum += Math.pow(element, 2);
    }

    n = sum;
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
};

const n = 2;
console.log(isHappy(n));

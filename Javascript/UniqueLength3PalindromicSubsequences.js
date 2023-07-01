// Leetcode Problem - 1930

var countPalindromicSubsequence = function (s) {
  let res = new Set();
  let left = new Set();
  let right = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!right.has(s[i])) {
      right.set(s[i], 1);
    } else {
      right.set(s[i], right.get(s[i]) + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    right.set(s[i], right.get(s[i]) - 1);
    if (right.get(s[i]) === 0) {
      right.delete(s[i]);
    }

    for (let j = 0; j < 26; j++) {
      let c = String.fromCharCode("a".charCodeAt(0) + j);
      if (left.has(c) && right.has(c)) {
        res.add(s[i] + c + s[i]);
      }
    }

    left.add(s[i]);
  }

  console.log(res);
  return res.size;
};

s = "aabca";
console.log(countPalindromicSubsequence(s));

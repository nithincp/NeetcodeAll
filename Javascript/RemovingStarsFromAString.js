// Leetcode Problem - 2390

var removeStars = function (s) {
  const stack = []

  for (const char of s){
    if (char !== '*'){
        stack.push(char)
    }else if (char === '*'){
        stack.pop()
    }
  }

  return stack.join('')
};

const s = "leet**cod*e";
console.log(removeStars(s));

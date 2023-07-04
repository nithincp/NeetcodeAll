// Leetcode Problem - 946

var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let poppedIndex = 0;

  for (const element of pushed) {
    stack.push(element);

    while (
      poppedIndex < popped.length &&
      stack.length > 0 &&
      popped[poppedIndex] === stack[stack.length - 1]
    ) {
        stack.pop()
        poppedIndex+=1
    }
  }

  return stack.length > 0 ? false : true
};

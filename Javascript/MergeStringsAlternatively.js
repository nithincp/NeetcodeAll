//Leetcode Problem - 1768

var mergeStrings = function (word1, word2) {
  let newString = "";

  let lenWord1 = word1.length;
  let lenWord2 = word2.length;

  while (lenWord1 && lenWord2) {
    newString += word1[word1.length - lenWord1];
    newString += word2[word2.length - lenWord2];
    lenWord1--;
    lenWord2--;
  }

  while (lenWord1) {
    newString += word1[word1.length - lenWord1];
    lenWord1--;
  }

  while (lenWord2) {
    newString += word2[word2.length - lenWord2];
    lenWord2--;
  }

  return newString;
};

word1 = "abc";
word2 = "pqr";
console.log(mergeStrings(word1, word2));

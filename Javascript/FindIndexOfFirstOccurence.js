var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }

  if (haystack === needle) {
    return 0;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let subString = haystack.slice(i, i + needle.length);
    if (subString === needle) {
      return i;
    }
  }

  return -1;
};

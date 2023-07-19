// Leetcode Problem - 474

var findMaxForm = function (strs, m, n) {
  const dp = {};

  function dfs(i, m, n) {
    if (i === strs.length) {
      return 0;
    }

    if (dp[i] && dp[i][m] && dp[i][m][n]) {
      return dp[i][m][n];
    }

    const [mCount, nCount] = countZeroesOnes(strs[i]);
    dp[i] = dp[i] || {};
    dp[i][m] = dp[i][m] || {};
    dp[i][m][n] = dfs(i + 1, m, n);

    if (mCount <= m && nCount <= n) {
      dp[i][m][n] = Math.max(
        dp[i][m][n],
        1 + dfs(i + 1, m - mCount, n - nCount)
      );
    }

    return dp[i][m][n];
  }

  function countZeroesOnes(str) {
    let mCount = 0;
    let nCount = 0;

    for (const char of str) {
      if (char === "0") {
        mCount++;
      } else if (char === "1") {
        nCount++;
      }
    }

    return [mCount, nCount];
  }

  return dfs(0, m, n);
};

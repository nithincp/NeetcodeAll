##Leetcode Problem - 494

def findTargetSumWays(nums,target):

    memo = {}

    def backtracking(i, curr_sum):
        if i == len(nums):
            if curr_sum == target:
                return 1
            else:
                return 0

        if (i, curr_sum) in memo:
            return memo[(i, curr_sum)]

        positive_count = backtracking(i + 1, curr_sum + nums[i])
        negative_count = backtracking(i + 1, curr_sum - nums[i])

        memo[(i, curr_sum)] = positive_count + negative_count
        return memo[(i, curr_sum)]

    return backtracking(0, 0)


nums= [1000]
target = -1000

print(findTargetSumWays(nums,target))
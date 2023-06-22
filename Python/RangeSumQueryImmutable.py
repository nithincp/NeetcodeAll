## Leetcode Problem - 303

class NumArray:
    def __init__(self,nums) -> None:
        self.cumulativeSum = [nums[0]]*len(nums)

        for i in range(1,len(nums)):
            self.cumulativeSum[i] = self.cumulativeSum[i-1] + nums[i]
        print(self.cumulativeSum)

    def sumRange(self,left,right):
        if left == 0:
            return self.cumulativeSum[right]
        return self.cumulativeSum[right]-self.cumulativeSum[left-1]



nums=[-2, 0, 3, -5, 2, -1]
obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
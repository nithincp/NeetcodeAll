## Leetcode Problem - 47

class Solution:
    def permuteUnique(self,nums):
        output = []

        if len(nums) == 1:
            return [nums.copy()]
        
        for i in range(len(nums)):
            n = nums.pop(0)
            permuations = self.permuteUnique(nums)

            for permuation in permuations:
                permuation.append(n)

            for item in permuations: 
                if item not in output:
                    output.append(item)

            nums.append(n)

        return output


nums = [1,1,2]
obj = Solution()
print(obj.permuteUnique(nums))
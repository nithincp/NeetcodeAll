def permute(nums):
    output = []

    if len(nums)==1:
        return [nums.copy()]
    
    for i in range(len(nums)):
        n = nums.pop()
        permutations = permute(nums)

        for permutation in permutations:
            permutation.append(n)

        output.extend(permutations)
        nums.append(n)

    return output
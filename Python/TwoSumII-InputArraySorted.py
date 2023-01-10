def twoSum(numbers,target):
    finalArray = []

    for i in range(len(numbers)):
        difference = target - numbers[i]

        if i!= 0:
            if numbers[i] == numbers[i-1]:
                continue

        if difference in numbers:
            if difference != numbers[i]:
                finalArray.append(i+1)
                finalArray.append(numbers.index(difference)+1)
                break
            elif difference == numbers[i]:
                if numbers[i] == numbers[i+1]:
                    finalArray.append(i+1)
                    finalArray.append(i+2)
                break
    
    return finalArray
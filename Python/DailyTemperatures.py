def dailyTemperatures(temperatures):
    result = [0]*len(temperatures)
    stack = []

    for index,temp in enumerate(temperatures):
        while stack and temp>stack[-1][0]:
            topTemp,topIndex = stack.pop()
            result[topIndex] = index - topIndex
        stack.append([temp,index])

    return result

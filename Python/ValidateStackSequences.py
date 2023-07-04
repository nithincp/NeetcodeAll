## Leetcode Problem - 946

def validateStackSequences(pushed,popped):
    poppedIndex = 0
    stack = []

    for element in pushed:
        stack.append(element)

        while poppedIndex<len(popped) and stack and popped[poppedIndex] == stack[-1]:
            stack.pop()
            poppedIndex+=1

    return not stack

    

    



pushed = [1,2,3,4,5]
popped = [4,5,3,2,1]

print(validateStackSequences(pushed,popped))
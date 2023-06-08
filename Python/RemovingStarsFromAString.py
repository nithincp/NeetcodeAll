## Leetcode Problem - 2390

def removeStars(s):

    stack = []

    for element in s:
        if element != '*':
            stack.append(element)
        else:
            stack.pop()

    return ''.join(stack)

s = "leet**cod*e"
print(removeStars(s))
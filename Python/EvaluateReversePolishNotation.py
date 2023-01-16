def evalRPN(tokens):
    
    stack = []

    for char in tokens:
        if char == '+':
            stack.append(stack.pop()+stack.pop())
        elif char == '-':
            num2 = stack.pop()
            num1 = stack.pop()
            stack.append(num1-num2)
        elif char == '*':
            stack.append(stack.pop()*stack.pop())
        elif char == '/':
            num2 = stack.pop()
            num1 = stack.pop()
            stack.append(int(num1/num2))
        else:
            stack.append(int(char))
    
    return stack[0]
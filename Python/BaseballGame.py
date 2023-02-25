def baseballGame(operations):
    stack = []

    for operation in operations:
        if operation == 'C':
            stack.pop()
        elif operation == 'D':
            stack.append(2*stack[len(stack)-1])
        elif operation == '+':
            stack.append(stack[len(stack)-1] + stack[len(stack)-1])
        else:
            stack.append(int(operation))

    result = 0
    for item in stack:
        result+=item

    return result
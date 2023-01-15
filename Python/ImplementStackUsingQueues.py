from collections import deque

class Mystack:

    def __init__(self) -> None:
        self.stack = deque()


    def push(self,x):
        self.stack.push(x)

    def pop(self):
        for i in range(len(self.stack)-1):
            self.stack.append(self.stack.popleft())
        return self.stack.popleft()

    def top(self):
        self.stack[-1]
    
    def empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False
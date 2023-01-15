class Mystack:

    def __init__(self) -> None:
        self.stack = []


    def push(self,x):
        self.stack.push(x)

    def pop(self):
        self.stack.pop()

    def top(self):
        self.stack[-1]
    
    def empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False
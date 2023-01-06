class MinStack:

    def __init__(self) -> None:
        self.minStack = []
        self.minArray = []
        self.minElement = 0

    def push(self,val) -> None:
        if len(self.minStack) == 0:
            self.minElement = val
            self.minArray.append(val)
        else:
            if val <= self.minElement:
                self.minElement = val
                self.minArray.append(val)

        self.minStack.append(val)

    def pop(self) -> None:
        topElement = self.minStack[-1]
        if topElement == self.minElement:
            self.minArray.pop()
            if len(self.minArray) !=0:
                self.minElement = self.minArray[-1]
        
        self.minStack.pop()


    def top(self) -> int:
        return self.minStack[-1]


    def getMin(self) -> int:
        return self.min
## Leetcode Problem - 1603

class ParkingSystem:

    def __init__(self,big,medium,small) -> None:
        self.big = big
        self.bigCur = 0
        self.medium = medium
        self.mediumCur = 0
        self.small = small
        self.smallCur = 0

    def addCar(self,carType):
        if carType == 1:
            if self.bigCur<self.big:
                self.bigCur+=1
                return True
            else:
                return False
        elif carType == 2:
            if self.mediumCur<self.medium:
                self.mediumCur+=1
                return True
            else:
                return False
        elif carType == 3:
            if self.smallCur<self.small:
                self.smallCur+=1
                return True
            else:
                return False

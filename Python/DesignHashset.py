## Leetcode Problem - 705

class MyHashSet:
    def __init__(self) -> None:
        self.set = []

    def add(self,key):
        if key not in self.set:
            self.set.append(key)

    def remove(self,key):
        if key in self.set:
            self.set.delete(key)

    def contains(self,key):
        if key in self.set:
            return True
        else:
            return False



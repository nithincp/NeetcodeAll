class Node:
    def __init__(self,key,val) -> None:
        self.key = key
        self.val = val
        self.prev = None
        self.next = None


    class LRUCache:
        def __init__(self,capacity) -> None:
            self.cap = capacity
            self.cache = {}
            self.left = Node(0,0)
            self.right = Node(0,0)
            self.left.next = self.right
            self.right.prev = self.left

        def remove(self,node):
            prev,next = node.prev,node.next
            prev.next = next
            next.prev = prev

        def insert(self,node):
            prev,next = self.right.prev,self.right
            prev.next = node
            next.prev = node
            node.next = next
            node.prev = prev

        def get(self,key):
            if key in self.cache:
                self.remove(self.cache[key])
                self.insert(self.cache[key])
                return self.cache[key].val
            
            return -1


        def put(self,key,val):
            if key in self.cache:
                self.remove(self.cache[key])
            self.cache[key] = Node(key,val)
            self.insert(self.cache[key])

            if len(self.cache) > self.cap:
                lru = self.left.next
                self.remove(lru)
                del self.cache[lru.key]
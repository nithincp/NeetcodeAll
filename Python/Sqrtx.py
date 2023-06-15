import math

def mySqrt(x):

    if (x == 1 or x == 0):
            return x

    if x == 2 or x ==3 :
        return 1

    for i in range(0,math.ceil(x/2)+1):
        if i*i == x:
            return i
        elif i*i>x:
            return i-1
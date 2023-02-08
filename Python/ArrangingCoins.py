def arrangingCoins(n):
    l,r = 1,n
    res = 0

    while l<=r:
        mid = (l+r)//2
        coins = (mid/2)*(mid+1)

        if coins>n:
            r=mid-1
        else:
            l=mid+1
            res=max(res,mid)

    return res
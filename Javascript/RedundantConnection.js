// Leetcode Problem - 684

var UnionFind = function(n){
    this.par = new Map()
    this.rank = new Map()

    for (let i=1;i<n+1;i++){
        this.par.set(i,i)
        this.rank.set(i,0)
    }
}


UnionFind.prototype.find = function(n){
    let p = this.par.get(n)

    while (p!==this.par.get(p)){
        this.par.set(p,this.par.get(this.par.get(p)))
        p = this.par.get(p)
    }

    return p
}

UnionFind.prototype.union = function(n1,n2){
    let p1 = this.find(n1)
    let p2 = this.find(n2)

    
    if (p1===p2){
        return false
    }

    if (this.rank.get(p1)>this.rank.get(p2)){
        this.par.set(p2,p1)
    }
    else if (this.rank.get(p2)>this.rank.get(p1)){
        this.par.set(p1,p2)
    }
    else{
        this.par.set(p1,p2)
        this.rank.set(p2,this.rank.get(p2)+1)
    }

    return true
}

var findRedundantConnection = function(edges){

    let n = 0
    for (const [u,v] of edges){
        n = Math.max(Math.max(v,n),u)
    }

    let unionfind = new UnionFind(n)

    result = []
    for (const [u,v] of edges){
        if (!unionfind.union(u,v)){
            result = [u,v]
        }
    }

    return result
    
}


edges = [[1,2],[1,3],[2,3]]
console.log(findRedundantConnection(edges))
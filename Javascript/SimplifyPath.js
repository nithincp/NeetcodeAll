var simplifyPath = function(path){
    let cur = ""
    let stack = []


    for(let c of path + "/"){
        if(c === "/"){
            if(cur === ".."){
                if(stack){
                    stack.pop()
                }
            }
            else if(cur !== "" && cur !== "."){
                stack.append(cur)
            }
            cur = ""
        }
        else{
            cur += c
        }
    }

    return "/"+stack.join("/")
}
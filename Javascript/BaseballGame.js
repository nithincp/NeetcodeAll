var baseballGame = function(opearations){
    let stack = []

    for(const operation of operations){
        if(operation === 'C'){
            stack.pop()
        }
        else if(operation === 'D'){
            stack.push(2*stack[stack.length-1])
        }
        else if(operation === '+'){
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }
        else{
            stack.push(Number(operation))
        }
    }
    let result = 0
    for(const item of stack){
        result+=item
    }

    return result
}
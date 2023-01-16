var evalRPN = function(token){
    let stack = []

    for(const char of tokens){
        if(char === '+'){
            stack.push(stack.pop()+stack.pop())
        }
        else if(char === '-'){
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1-num2)
        }
        else if(char === '*'){
            stack.push(stack.pop()*stack.pop())
        }
        else if(char === '/'){
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(parseInt(num1/num2))
        }
        else{
            stack.push(parseInt(char))
        }
    }

    return stack[0]
}
//This problem can be solved with the help of stacks

var dailyTemperatures = function(temperatures){
    let result = new Array(temperatures.length).fill(0)
    let stack = []

    for(let i=0;i<temperatures.length;i++){
        while(stack.length>0 && temperatures[i]>stack[stack.length-1][0]){
            topItem = stack.pop()
            topTemp = topItem[0]
            topIndex = topItem[1]
            result[topIndex] = i-topIndex
        }
        stack.push([temperatures[i],i])
    }
    return result
}
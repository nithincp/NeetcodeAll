var twoSum = function(numbers,target){
    const finalArray = []

    for(let i=0;i<numbers.length;i++){
        let difference = target - numbers[i]

        if(i !== 0){
            if(numbers[i] === numbers[i-1]){
                continue
            }
        }
        
        if(numbers.include(difference)){
            if(difference !== numbers[i]){
                finalArray.push(i+1)
                finalArray.push(numbers.indexOf(difference)+1)
            }
            else if(difference === numbers[i]){
                if(numbers[i] === numbers[i+1]){
                    finalArray.push(i+1)
                    finalArray.push(i+2)
                }
                break
            }
        }
    }

    return finalArray
}
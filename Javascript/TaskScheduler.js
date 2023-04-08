var taskScheduler = function(tasks,n){
    const hashMap = {}

    for (const task of tasks){
        if(task in hashMap){
            hashMap[task]+=1
        }
        else{
            hashMap[task] = 1
        }
    }

    const countArray = () => {
        const array = []
        for(const key in hashMap){
            array.push(hashMap[key])
        }
        return array
    }

    const maxHeap = new MaxPriorityQueue()
    for (const value of countArray()){
        maxHeap.enqueue(value)
    }

    const queue = []
    let time = 0

    while(maxHeap.size()>0 || queue.length > 0){
        time += 1

        if(maxHeap.size()>0){
            let count = maxHeap.dequeue().element-1
            if (count>0){
                queue.push([count,time+n])
            }
        }

        if(queue.length > 0 && queue[0][1] === time){
            maxHeap.enqueue(queue.shift()[0])
        }
    }

    return time
}
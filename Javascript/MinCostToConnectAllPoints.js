// Leetcode Problem - 1584

//The below code is working only for 8 out of 72 test cases

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, cost) {
    const element = [value, cost];
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.swap(0, this.heap.length - 1);
    const removedElement = this.heap.pop();
    this.bubbleDown(0);
    return removedElement[0];
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0][0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index][1] < this.heap[parentIndex][1]) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

var UnionFind = function (n) {
  this.par = new Map();
  this.rank = new Map();

  for (let i = 1; i < n + 1; i++) {
    this.par.set(i, i);
    this.rank.set(i, 0);
  }
};

UnionFind.prototype.find = function (n) {
  let p = this.par.get(n);

  while (p !== this.par.get(p)) {
    this.par.set(p, this.par.get(this.par.get(p)));
    p = this.par.get(p);
  }

  return p;
};

UnionFind.prototype.union = function (n1, n2) {
  let p1 = this.par.get(n1);
  let p2 = this.par.get(n2);

  if (p1 === p2) {
    return false;
  }

  if (this.rank.get(p1) > this.rank.get(p2)) {
    this.par.set(p2, p1);
  } else if (this.rank.get(p2) > this.rank.get(p1)) {
    this.par.set(p1, p2);
  } else {
    this.par.set(p1, p2);
    this.rank.set(p2, this.rank.get(p2) + 1);
  }

  return true;
};

var minCostConnectPoints = function (points) {
  const n = points.length;

  //Creating node numbers for each point on the x-y plane
  const keyDict = new Map();
  count = 1;

  for (let i = 0; i < n; i++) {
    keyDict.set(`${points[i][0]}${points[i][1]}`, count);
    count += 1;
  }

  const edgeDict = new Map();
  //Creating a map with each node having a value of all the possible edges
  for (let i = 0; i < n; i++) {
    edgeDict.set(keyDict.get(`${points[i][0]}${points[i][1]}`), []);

    for (let j = i + 1; j < n; j++) {
      const cost =
        Math.abs(points[j][0] - points[i][0]) +
        Math.abs(points[j][1] - points[i][1]);

      const edgeArray = edgeDict.get(
        keyDict.get(`${points[i][0]}${points[i][1]}`)
      );
      edgeArray.push([cost, keyDict.get(`${points[j][0]}${points[j][1]}`)]);
      edgeDict.set(keyDict.get(`${points[i][0]}${points[i][1]}`), edgeArray);
    }
  }

  const edgeSDList = [];
  const totalNodes = edgeDict.size;

  edgeDict.forEach((value, key) => {
    const source = key;
    const destinations = value;

    for (const destination of destinations) {
      destination.push(source);
      edgeSDList.push(destination);
    }
  });

  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < edgeSDList.length; i++) {
    const path = edgeSDList[i];
    const cost = path[0];
    const destination = path[1];
    const source = path[2];

    minHeap.enqueue([source, destination], cost);
  }

  const unionfind = new UnionFind(totalNodes);

  const mst = [];
  let finalCost = 0;
  let cost = 0;
  while (mst.length < totalNodes - 1) {
    const [n1, n2] = minHeap.dequeue();

    if (!unionfind.union(n1, n2)) {
      continue;
    }
    for (const element of edgeSDList) {
      if (element[1] === n2 && element[2] === n1) {
        cost = element[0];
      }
    }
    mst.push([n1, n2]);
    finalCost += cost;
    console.log(`Cost is ${cost} and FinalCost is ${finalCost}`);
  }
  return finalCost;
};

points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
console.log(minCostConnectPoints(points));

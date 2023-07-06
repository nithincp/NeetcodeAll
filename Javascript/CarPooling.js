// Leetcode Problem - 1094

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }
    return minValue;
  }

  heapifyUp() {
    let currentIdx = this.size() - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (
      currentIdx > 0 &&
      this.heap[currentIdx][0] < this.heap[parentIdx][0]
    ) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  heapifyDown() {
    let currentIdx = 0;
    let childIdx = 1;

    while (childIdx < this.size()) {
      if (
        childIdx + 1 < this.size() &&
        this.heap[childIdx + 1][0] < this.heap[childIdx][0]
      ) {
        childIdx += 1;
      }

      if (this.heap[currentIdx][0] <= this.heap[childIdx][0]) {
        break;
      }

      this.swap(currentIdx, childIdx);
      currentIdx = childIdx;
      childIdx = 2 * currentIdx + 1;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

var carPooling = function (trips, capacity) {
  trips.sort((a, b) => a[1] - b[1]);

  const minHeap = new MinHeap();
  let totalPassengers = 0;

  for (const trip of trips) {
    const [numPassengers, start, end] = trip;

    while (minHeap.size() && minHeap.peek()[0] <= start) {
      totalPassengers -= minHeap.peek()[1];
      minHeap.pop();
    }

    totalPassengers += numPassengers;
    if (totalPassengers > capacity) {
      return false;
    }
    minHeap.push([end, numPassengers]);
  }

  return true;
};

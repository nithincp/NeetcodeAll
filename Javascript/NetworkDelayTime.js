// Leetcode Problem - 743

const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

var networkDelayTime = function (times, n, k) {
  const adjList = {};
  for (let i = 0; i < n + 1; i++) {
    adjList[i] = [];
  }

  for (const [u, v, w] of times) {
    adjList[u].push([v, w]);
  }

  const visit = new Set();
  const minHeap = new MinPriorityQueue();
  minHeap.enqueue([k, 0], 0);
  let t = 0;

  while (!minHeap.isEmpty()) {
    const [n1, w1] = minHeap.dequeue().element;

    if (visit.has(n1)) {
      continue;
    }

    visit.add(n1);
    t = w1;

    for (const [n2, w2] of adjList[n1]) {
      if (!visit.has(n2)) {
        minHeap.enqueue([n2, w1 + w2], w1 + w2);
      }
    }
  }

  if (visit.size === n) return t;
  else {
    return -1;
  }
};

times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
n = 4;
k = 2;

console.log(networkDelayTime(times, n, k));

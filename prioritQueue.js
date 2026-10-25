// A priority queue is a specialized data structure where each element has a priority, and elements are served based on their priority, not just the order they were added.

// JavaScript and Node.js do not have a built-in PriorityQueue like in Java or C++. But you can implement one easily using classes, a heap, or sorted arrays.

// Basic Implementation Using Sorted Array
// This is a simple version. Not the most efficient (O(n) insert), but good for understanding.

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const newItem = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem); // insert at correct position
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    return this.items.shift(); // remove the highest-priority item
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}


const pq = new PriorityQueue();

pq.enqueue('Low priority task', 5);
pq.enqueue('Urgent task', 1);
pq.enqueue('Normal task', 3);

while (!pq.isEmpty()) {
  const item = pq.dequeue();
  console.log(`${item.element} (priority ${item.priority})`);
}


// | Implementation Method                    | Performance | Complexity                |
// | ---------------------------------------- | ----------- | ------------------------- |
// | Sorted Array                             | Simple      | `O(n)` insert             |
// | Binary Heap (Min/Max)                    | Efficient   | `O(log n)` insert/dequeue |
// | External Libraries (`fastpriorityqueue`) | Very fast   | Optimized heap            |

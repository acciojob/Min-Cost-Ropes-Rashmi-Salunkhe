const { MinHeap } = require('heap-js');

function mincost(arr) {
    // Create a min-heap with the given array elements
    let heap = new MinHeap();
    heap.init(arr);
    
    let totalCost = 0;

    while (heap.size() > 1) {
        // Extract the two smallest ropes
        let first = heap.pop();
        let second = heap.pop();
        
        // Combine the ropes and calculate the cost
        let combined = first + second;
        totalCost += combined;
        
        // Add the combined rope back to the heap
        heap.push(combined);
    }

    return totalCost;
}

module.exports = mincost;

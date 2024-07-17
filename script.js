function mincost(arr) {
    // Min-heap implementation using a priority queue
    const MinHeap = require('collections/heap');

    // Create a min-heap with the given array elements
    let heap = new MinHeap(arr, null, (a, b) => b - a);
    
    let totalCost = 0;

    while (heap.length > 1) {
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

function mincost(arr) {
    if (arr.length === 0) return 0;
    
    // Helper function to heapify a subtree rooted with node i
    function heapify(arr, n, i) {
        let smallest = i; // Initialize smallest as root
        let left = 2 * i + 1; // left child
        let right = 2 * i + 2; // right child

        if (left < n && arr[left] < arr[smallest])
            smallest = left;

        if (right < n && arr[right] < arr[smallest])
            smallest = right;

        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // swap

            // Recursively heapify the affected sub-tree
            heapify(arr, n, smallest);
        }
    }

    // Build a min heap from the given array
    function buildMinHeap(arr, n) {
        let startIdx = Math.floor(n / 2) - 1;

        // Perform reverse level order traversal from last non-leaf node
        // and heapify each node
        for (let i = startIdx; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    // Extract minimum element from the heap
    function extractMin(arr, n) {
        if (n <= 0)
            return Number.MAX_VALUE;

        if (n === 1) {
            n--;
            return arr[0];
        }

        // Store the minimum value, and remove it from heap
        let root = arr[0];
        arr[0] = arr[n - 1];
        n--;
        heapify(arr, n, 0);

        return root;
    }

    // Function to insert a new value in the heap
    function insertMinHeap(arr, n, key) {
        n++;
        arr[n - 1] = key;

        // Traverse up and fix violated property
        let i = n - 1;
        while (i !== 0 && arr[Math.floor((i - 1) / 2)] > arr[i]) {
            [arr[i], arr[Math.floor((i - 1) / 2)]] = [arr[Math.floor((i - 1) / 2)], arr[i]];
            i = Math.floor((i - 1) / 2);
        }
    }

    // Main function to return the minimum cost to connect all ropes
    function minCostToConnectRopes(arr) {
        let n = arr.length;
        buildMinHeap(arr, n);
        let result = 0;

        while (n > 1) {
            // Extract two minimum lengths
            let min1 = extractMin(arr, n);
            n--;
            let min2 = extractMin(arr, n);
            n--;

            let sum = min1 + min2;
            result += sum;

            // Insert the combined rope back into the min-heap
            insertMinHeap(arr, n, sum);
            n++;
        }

        return result;
    }

    return minCostToConnectRopes(arr);
}

module.exports = mincost;

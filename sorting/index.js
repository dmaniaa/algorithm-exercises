// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const hold = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = hold;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
  
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
  
      const hold = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = hold;
    }
  
    return arr;
}

function mergeSort(arr) {
    const len = arr.length;

    if (len <= 1) {
        return arr;
    }
  
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } 
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

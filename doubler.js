function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) - Linear Time
// grows linearly and in direct proportion to the size of input data set
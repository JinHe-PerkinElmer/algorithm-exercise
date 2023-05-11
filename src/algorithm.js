function getSubArrayMaxSum(arr) {
  let cur = 0;
  let max = -Infinity;
  arr.forEach((v) => {
    cur += v;
    max = Math.max(cur, max);
    cur = cur < 0 ? 0 : cur;
  });
  return max;
}

function getSubMatrixMaxSum(matrix) {
  // matrix is x rows and y columns;
  let max = -Infinity;
  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    const compressed = [];
    row.forEach((_, index) => {
      compressed[index] = 0;
    });
    for (let j = i; j < matrix.length; j += 1) {
      const tempRow = matrix[j];
      let cur = 0;
      tempRow.forEach((value, index) => {
        compressed[index] += value;
      });
      cur += getSubArrayMaxSum(compressed);
      max = Math.max(cur, max);
      cur = cur < 0 ? 0 : cur;
    }
  }
  return max;
}


function insertionSort(arr) {
  let current = 0;
  let j = 0;
  for (let i = 1; i < arr.length; i += 1) {
    j = i - 1;
    current = arr[i];
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

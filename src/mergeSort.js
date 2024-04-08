

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;
  let L = []; // Temp Left/Right arr;
  let R = [];
  // Copy data to temp arr;
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }
  // Merge
  let i = 0, j = 0, k = left;
  while(i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  // Copy remaining elements;
  while(i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while(j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}


function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2, 10);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
//1

function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === 0) {
        firstZeroIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return arr.length - firstZeroIndex;
  }

  
//2

  function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let start = -1;
    let end = -1;
  
    // Find the first occurrence of num
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        start = mid;
        right = mid - 1;
      } else if (arr[mid] > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    // Find the last occurrence of num
    left = 0;
    right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        end = mid;
        left = mid + 1;
      } else if (arr[mid] > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    if (start === -1 || end === -1) {
      return -1;
    }
  
    return end - start + 1;
  }

  //3

  function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= num && num < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (arr[mid] < num && num <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1;
  }
  
  //4

  function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % arr.length;
      const prev = (mid - 1 + arr.length) % arr.length;
  
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      } else if (arr[mid] <= arr[right]) {
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        left = mid + 1;
      }
    }
  
    return 0;
  }

  //5
  
  function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid];
      } else if (arr[mid] < x) {
        floor = arr[mid];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return floor;
  }
  

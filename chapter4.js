// 4.1 Write a recursive function to sum all the numbers in a list
const sum = (arr) => {
  const el = arr[0]
  if (el) {
    return sum(arr.slice(1)) + el
  } else {
    return 0
  }
}

// 4.2 Write a recursive function to count the number of items in a list
const length = (arr) => {
  const el = arr[0]
  if (el) {
    let count = length(arr.slice(1))
    return count += 1
  } else {
    return 0
  }
}

// 4.3 Find the maximum number in a list
const max = (arr) => {
  const el = arr[0]
  if (el) {
    const int = max(arr.slice(1))
    return int > el ? int : el
  } else {
    return 0
  }
}

// 4.4 Binary search
const find = (arr, val) => {}
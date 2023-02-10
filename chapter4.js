// 4.2 Write a recursive function to count the number of items in a list
const getLength = (arr) => {
  const firstEl = arr.shift()
  if (firstEl) {
    let count = listCount(arr)
    return (count += 1)
  } else {
    return 0
  }
}
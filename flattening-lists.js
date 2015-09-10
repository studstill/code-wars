// In this Kata you will create a function that takes a list of lists as an
// input and returns a flat list.

// Example:

// flatten([[1,2],[3,4]]) == [1,2,3,4]
// flatten([[1],[2],[3],[4]]) == [1,2,3,4]

// My solution:
function flatten(l) {
  return l.reduce(function(flatList, current) {
    return flatList.concat(current);
  });
}

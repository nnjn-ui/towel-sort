
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArr = [];
  if (matrix) {
      matrix.forEach((item, i) => {
          if (i % 2) {
              item.reverse();
          }
          newArr = newArr.concat(item);
      });
  }
  return newArr;
}
const pascalTriangle = steps => {
  if (steps <= 0) {
    return "Steps should be > 0 , try again!!";
  }

  const arr = [];
  for (let row = 0; row < steps; row++) {
    arr[row] = [];

    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) {
        // if the element is on the edge of the triangle, then assign 1 to the current cell value.
        arr[row][col] = 1;
      } else {
        // To determine the value of current (row,col), go to the previous row (row-1)
        // and add the adjacent elements in two colums (col-1, col)
        arr[row][col] = arr[row - 1][col - 1] + arr[row - 1][col];
      }
    }
    console.log(...arr[row]);
  }
};

console.log(pascalTriangle(10));

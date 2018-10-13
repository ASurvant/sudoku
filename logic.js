function generateGrid() {
  let rowLabels = "abcdefghi";
  let grid = [[],[],[],[],[],[],[],[],[]];

<<<<<<< HEAD
  for (let i = 0; i < rowLabels.length; i++) {
    for (let j = 1; j < 10; j++) {
      grid[i][j] =  ("#" + rowLabels[i] + j);
    }
  }

  return grid;
}

function generateGrid() {
  let rowLabels = "abcdefghi";
  let grid = [[],[],[],[],[],[],[],[],[]];

  for (let i = 0; i < rowLabels.length; i++) {
    for (let j = 0; j < 9; j++) {
=======
  for (var i = 0; i < rowLabels.length; i++) {
    for (var j = 0; j < 9; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      grid[i][j] =  "#" + rowLabels[i] + (j + 1);
    }
  }

  return grid;
}


function areRowsValid(board) {
<<<<<<< HEAD
  for (let i = 0; i < board.length; i++) {
    let seen = Array(10).fill(false);

    for (let j = 0; j < board.length; j++) {
=======
  for (var i = 0; i < board.length; i++) {
    let seen = Array(10).fill(false);

    for (var j = 0; j < board.length; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      let currentVal = board[i][j];

      if (seen[currentVal] && currentVal !== 0){
        return false;
      } else {
        seen[currentVal] = true;
      }
    }
  }

  return true;
}

function areColsValid(board) {
<<<<<<< HEAD
  for (let i = 0; i < board.length; i++) {
    let seen = [];

    for (let j = 0; j < board.length; j++) {
=======
  for (var i = 0; i < board.length; i++) {
    let seen = [];

    for (var j = 0; j < board.length; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      if ((seen.indexOf(board[j][i]) > -1) && (board[j][i] > 0)) {
        return false;
      } else {
        seen.push(board[j][i]);
      }
    }
  }

  return true;
}

function unitCheck(board, startingRow, startingCol) {
  let seen = [];
<<<<<<< HEAD
  for (let i = startingRow; i < startingRow + 3; i++) {
    for (let j = startingCol; j < startingCol + 3; j++) {
=======
  for (var i = startingRow; i < startingRow + 3; i++) {
    for (var j = startingCol; j < startingCol + 3; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      if ((seen.indexOf(board[i][j]) > -1) && (board[i][j] > 0)) {
        return false;
      } else {
        seen.push(board[i][j]);
      }
    }
  }

  return true;
}

function areGridsValid(board) {
  let tlu = unitCheck(board, 0, 0);
  let tmu = unitCheck(board, 0, 3);
  let tru = unitCheck(board, 0, 6);

  let mlu = unitCheck(board, 3, 0);
  let mmu = unitCheck(board, 3, 3);
  let mru = unitCheck(board, 3, 6);

  let blu = unitCheck(board, 6, 0);
  let bmu = unitCheck(board, 6, 3);
  let bru = unitCheck(board, 6, 6);

<<<<<<< HEAD
  for (let i = 0; i < 9; i++) {
=======
  for (var i = 0; i < 9; i++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
    if ([tlu, tmu, tru, mlu, mmu, mru, blu, bmu, bru][i] === false) {
      return false;
    }
  }

  return true;
}

function isValidBoard(board) {
  if ((board.length === 9) && (board[0].length === 9)) {
    let rows = areRowsValid(board);
    let cols = areColsValid(board);
    let units = areGridsValid(board);

<<<<<<< HEAD
    for (let i = 0; i < 3; i++) {
=======
    for (var i = 0; i < 3; i++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      if ([rows, cols, units][i] === false) {
        return false;
      }
    }

    return true;

  } else {
    return false;
  }
}

function noZeroes(board) {
  let ans = true;
<<<<<<< HEAD
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
=======
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      if (board[i][j] === 0) {
        ans = false;
      }
    }
  }
  return ans;
}

function cloneBoard(arr) {
  let len = arr.length;
  let newArr = new Array(len);

<<<<<<< HEAD
  for (let i = 0; i < len; i++) {
=======
  for (var i = 0; i < len; i++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
    if (Array.isArray(arr[i])) {
      newArr[i] = cloneBoard(arr[i]);
    } else {
      newArr[i] = arr[i];
    }
  }

  return newArr;
}

function firstEmpty(board) {
  let ans = [];

<<<<<<< HEAD
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
=======
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
      if (board[i][j] === 0) {
        ans.push(i);
        ans.push(j);
      }
    }
  }

  return ans.slice(0,2);
}

function solve(board) {
<<<<<<< HEAD
  let ans;

=======
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f
  if (!isValidBoard(board)) {
    return [];
  } else if (isValidBoard(board) && noZeroes(board)) {
    return board;
  }

  // find an empty tile
  let focus = firstEmpty(board);

  // loop through 1-9 in the tile, calling solve with each one until a match is found
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let clonedBoard = cloneBoard(board);

  while (nums.length > 0) {
    clonedBoard[focus[0]][focus[1]] = nums.shift();
<<<<<<< HEAD
    ans = solve(clonedBoard);
=======
    var ans = solve(clonedBoard);
>>>>>>> 02a5d75a8b6821bf3970f14d6d0b42a4b5763d1f

    if (isValidBoard(ans) && noZeroes(ans)) {
      nums = [];
    }
  }

  return ans;
}

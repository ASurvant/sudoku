// TODO: refactor colCheck to leverage rowCheck
//       add cross-potential checking

function solve(initArr) {
  function gridCheck(i, j) {
    let gridSet = [];
    // provide a range
    switch (true) {
      case (i <= 2):
        i = 0;
      break;
      case (i > 2 && i <= 5):
        i = 3;
      break;
      default:
        i = 6;
    }

    switch (true) {
      case (j <= 2):
        j = 0;
      break;
      case (j > 2 && j <= 5):
        j = 3;
      break;
      default:
        j = 6;
    }

    for (var idx = i; idx < i + 3; idx++) {
      for (var jdx = j; jdx < j + 3; jdx++) {
        gridSet.push(initArr[idx][jdx]);
      }
    }

    potentials = [];

    for (var k = 1; k < 10; k++) {
      if (gridSet.indexOf(k) === -1) {
        potentials.push(k);
      }
    }

    return potentials;
  }

  function colCheck(i, j) {
    let potentials = [];

    let column = [];
    for (var idx = 0; idx < initArr.length; idx++) {
      column.push(initArr[idx][j]);
    }

    for (var k = 1; k < 10; k++) {
      if (column.indexOf(k) === -1) {
        potentials.push(k);
      }
    }
    return potentials;
  };

  function rowCheck(i, j) {
    let potentials = [];
    for (var k = 1; k < 10; k++) {
      if (initArr[i].indexOf(k) === -1) {
        potentials.push(k);
      };
    };

    return potentials;
  };

  function allPotentials(i, j) {
    let row = rowCheck(i, j);
    let col = colCheck(i, j);
    let grid = gridCheck(i, j);
    let pool = []
    for (var i = 1; i < 10; i++) {
      if (row.indexOf(i) > -1) {
        if (col.indexOf(i) > -1) {
          if (grid.indexOf(i) > -1) {
            pool.push(i);
          }
        }
      }
    }

    return pool;
  }

  for (var lp = 0; lp < 90; lp++) {
    for (var i = 0; i < initArr.length; i++) {
      // initArr[i] is looking at a row
      for (var j = 0; j < initArr.length; j++) {
        // initArr[i][j] is looking at a tile
        if (initArr[i][j] === 0) {
          if (allPotentials(i, j).length === 1) {
            initArr[i][j] = allPotentials(i, j)[0];
          } else if (j === 4) {
            // console.log(allPotentials(i, j));
            return allPotentials(i, j);
          }
        }
      }
    }
    // if ([].concat.apply([], initArr).indexOf(0) === -1) {
    //   console.log("triggered" + lp);
    //   return initArr;
    // }
  }

  return initArr;
};


let firstTest = [
  [0,3,7,5,0,9,2,1,0],
  [4,0,0,6,0,8,0,7,5],
  [6,0,5,0,3,0,0,0,0],
  [0,0,0,0,0,1,0,0,2],
  [0,7,6,0,0,0,4,9,0],
  [9,0,0,4,0,0,0,0,0],
  [0,0,0,0,6,0,5,0,7],
  [2,6,0,8,0,7,0,0,9],
  [0,5,1,9,0,3,6,8,0]
];

let secTest = [
  [0,0,0,5,0,0,0,0,0],
  [0,7,0,6,2,0,0,5,0],
  [0,3,0,0,0,0,8,0,9],
  [0,0,8,9,0,0,0,0,6],
  [2,0,0,0,0,0,0,0,7],
  [4,0,0,0,0,2,5,0,0],
  [6,0,4,0,0,0,0,3,0],
  [0,2,0,0,1,5,0,6,0],
  [0,0,0,0,0,9,0,0,0]
];

// console.log(solve(firstTest));
console.log(solve(secTest));

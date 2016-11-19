// TODO: refactor colCheck to leverage rowCheck
//       add cross-potential checking
//
// function solve(initArr) {
//   // finds which 3x3 area to begin a search in
//   function gridFind(i, j) {
//     switch (true) {
//       case (i <= 2):
//         i = 0;
//       break;
//       case (i > 2 && i <= 5):
//         i = 3;
//       break;
//       default:
//         i = 6;
//     }
//
//     switch (true) {
//       case (j <= 2):
//         j = 0;
//       break;
//       case (j > 2 && j <= 5):
//         j = 3;
//       break;
//       default:
//         j = 6;
//     }
//     return [i, j];
//   }
//
//   function gridCheck(i, j) {
//     let gridSet = [];
//     let x = gridFind(i, j)[1];
//     let y = gridFind(i, j)[0];
//
//     for (var idx = y; idx < y + 3; idx++) {
//       for (var jdx = x; jdx < x + 3; jdx++) {
//         gridSet.push(initArr[idx][jdx]);
//       }
//     }
//
//     potentials = [];
//
//     for (var k = 1; k < 10; k++) {
//       if (gridSet.indexOf(k) === -1) {
//         potentials.push(k);
//       }
//     }
//
//     return potentials;
//   }
//
//   function colCheck(i, j) {
//     let potentials = [];
//     let column = [];
//
//     for (var idx = 0; idx < initArr.length; idx++) {
//       column.push(initArr[idx][j]);
//     }
//
//     for (var k = 1; k < 10; k++) {
//       if (column.indexOf(k) === -1) {
//         potentials.push(k);
//       }
//     }
//
//     return potentials;
//   };
//
//   function rowCheck(i, j) {
//     let potentials = [];
//     for (var k = 1; k < 10; k++) {
//       if (initArr[i].indexOf(k) === -1) {
//         potentials.push(k);
//       };
//     };
//
//     return potentials;
//   };
//
//   function allPotentials(i, j) {
//     let row = rowCheck(i, j);
//     let col = colCheck(i, j);
//     let grid = gridCheck(i, j);
//     let pool = []
//     for (var k = 1; k < 10; k++) {
//       if (row.indexOf(k) > -1) {
//         if (col.indexOf(k) > -1) {
//           if (grid.indexOf(k) > -1) {
//             pool.push(k);
//           }
//         }
//       }
//     }
//
//     return pool;
//   }
//
//   function onlyTile(i, j) {
//     let currentSpot = allPotentials(i, j);
//     let otherSpots = [];
//     let y = gridFind(i, j)[0];
//     let x = gridFind(i, j)[1];
//
//     // iterate through those allPotentials
//     for (var idx = y; idx < y + 3; idx++) {
//       for (var jdx = x; jdx < x + 3; jdx++) {
//         let ballbat = true;
//
//         if (idx === i) {
//           if (jdx === j) {
//             ballbat = false;
//           };
//         };
//
//         if ((initArr[idx][jdx] === 0) && (ballbat)) {
//           otherSpots.push(allPotentials(idx, jdx));
//         }
//       }
//     }
//
//     otherSpots = [].concat.apply([], otherSpots);
//
//     for (var focus = 0; focus < currentSpot.length; focus++) {
//       if (otherSpots.indexOf(currentSpot[focus]) === -1) {
//         return [currentSpot[focus]];
//       } else if (currentSpot[focus] === 9 && currentSpot.length === 5) {
//       }
//     }
//     return currentSpot;
//   }
//
//
//   for (var lp = 0; lp < 90; lp++) {
//     for (var i = 0; i < initArr.length; i++) {
//       for (var j = 0; j < initArr.length; j++) {
//         if (initArr[i][j] === 0) {
//           if (onlyTile(i, j).length === 1) {
//             initArr[i][j] = onlyTile(i, j)[0];
//           }
//         }
//       }
//     }
//   }
//
//   return initArr;
// };



// function generateGrid() {
//   let rowLabels = "abcdefghi";
//   let grid = [[],[],[],[],[],[],[],[],[]];
//
//   for (var i = 0; i < rowLabels.length; i++) {
//     for (var j = 0; j < 9; j++) {
//       grid[i][j] =  "#" + rowLabels[i] + (j + 1);
//     }
//   };
//
//   return grid;
// };
//
// function loopies() {
//   let g = generateGrid();
//
//   for (var i = 0; i < g.length; i++) {
//     console.log(g[i].indexOf('f5'));
//   }
// }
// console.log(generateGrid().indexOf('f5'));
// loopies();

// let firstTest = [
//   [0,3,7,5,0,9,2,1,0],
//   [4,0,0,6,0,8,0,7,5],
//   [6,0,5,0,3,0,0,0,0],
//   [0,0,0,0,0,1,0,0,2],
//   [0,7,6,0,0,0,4,9,0],
//   [9,0,0,4,0,0,0,0,0],
//   [0,0,0,0,6,0,5,0,7],
//   [2,6,0,8,0,7,0,0,9],
//   [0,5,1,9,0,3,6,8,0]
// ];

//
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

function solve(initArr) {
  console.log("also here somehow...");
  function gridFind(i, j) {
    let x = 0;
    let y = 0;
    switch (true) {
      case (i <= 2):
        y = 0;
      break;
      case (i > 2 && i <= 5):
        y = 3;
      break;
      default:
        y = 6;
    }

    switch (true) {
      case (j <= 2):
        x = 0;
      break;
      case (j > 2 && j <= 5):
        x = 3;
      break;
      default:
        x = 6;
    }
    return [y, x];
  }

  function gridCheck(i, j) {
    let gridSet = [];
    let x = gridFind(i, j)[1];
    let y = gridFind(i, j)[0];

    for (var idx = y; idx < y + 3; idx++) {
      for (var jdx = x; jdx < x + 3; jdx++) {
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

  function deepClone(arr) {
    var len = arr.length;
    var newArr = new Array(len);
    for (var i=0; i<len; i++) {
      if (Array.isArray(arr[i])) {
        newArr[i] = deepClone(arr[i]);
      }
      else {
        newArr[i] = arr[i];
      }
    }
    return newArr;
  }

  function allPotentials(i, j) {
    let row = rowCheck(i, j);
    let col = colCheck(i, j);
    let grid = gridCheck(i, j);
    let pool = []
    for (var k = 1; k < 10; k++) {
      if (row.indexOf(k) > -1) {
        if (col.indexOf(k) > -1) {
          if (grid.indexOf(k) > -1) {
            pool.push(k);
          }
        }
      }
    }

    return pool;
  }

  for (var i = 0; i < initArr.length; i++) {
    if (i === initArr.length -1) {
      console.log("i barely there, but: " + i)
    }

    for (var j = 0; j < initArr.length; j++) {
      if (j === initArr.length - 1) {
        console.log("j be like: " + j);
      }

      // If there's only one option, fill it in
      if ((initArr[i][j] === 0) && (allPotentials(i, j).length === 1)) {
        initArr[i][j] = allPotentials(i, j)[0];

      // If there are multiple options, test them all
      } else if ((initArr[i][j] === 0) && (allPotentials(i, j).length >= 2)) {
        let allBuffer = deepClone(allPotentials(i, j));

        // console.log("Current buffer: " + allBuffer);
        while (allBuffer.length > 0) {
          // console.log("We're at i= " + i + " and j= " + j);
          clonedArr = deepClone(initArr);
          clonedArr[i][j] = allBuffer.shift();

          // if this is the answer
          // // meaning, if we got a [] back then it its length is 0
          if (solve(clonedArr).length > 0 && console.log("in loop")) {
            initArr = solve(clonedArr);
            return initArr;
          }
        }

      // If there are no options, this is a dead end and we're in recursion. Kill leaf.
      } else if ((initArr[i][j] === 0) && (allPotentials(i, j).length <= 0)) {
        // initArr = [];
        return [];
      }
    }
  }

  return initArr;
};

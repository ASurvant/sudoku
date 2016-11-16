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
    for (var k = 1; k < 10; k++) {
      if (row.indexOf(k) > -1) {
        if (col.indexOf(k) > -1) {
          if (grid.indexOf(k) > -1) {
            // console.log("hi thare " + k);
            pool.push(k);
          }
        }
      }
    }

    return pool;
  }
  // For each number and tile given, return true if
  // that is the only tile the number can go to in that grid
  // calls allPotentials on every spot in the given grid
  function onlyTile(i, j) {
    let currentSpot = allPotentials(i, j);
    // concats allPotentials from every spot in same grid
    let otherSpots = [];
    let y = 0;
    let x = 0;
    // find which grid we're in
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
    // iterate through those allPotentials
    for (var idx = y; idx < y + 3; idx++) {
      for (var jdx = x; jdx < x + 3; jdx++) {
        let ballbat = true;

        if (idx === i) {
          if (jdx === j) {
            ballbat = false;
          };
        };

        if ((initArr[idx][jdx] === 0) && (ballbat)) {
          // console.log(allPotentials(idx, jdx) + " all Pots " + idx + " " +jdx);
          otherSpots.push(allPotentials(idx, jdx));
        }
      }
    }

    otherSpots = [].concat.apply([], otherSpots);
    // console.log(otherSpots);

    for (var focus = 0; focus < currentSpot.length; focus++) {
      if (otherSpots.indexOf(currentSpot[focus]) === -1) {
        // console.log("ticke me timbers");
        // console.log(currentSpot[focus]);
        return [currentSpot[focus]];
      } else if (currentSpot[focus] === 9 && currentSpot.length === 5) {
        console.log("ohai");
        console.log(otherSpots);
      }
    }
    return currentSpot;
  }


  for (var lp = 0; lp < 90; lp++) {
    for (var i = 0; i < initArr.length; i++) {
      // initArr[i] is looking at a row
      for (var j = 0; j < initArr.length; j++) {
        // initArr[i][j] is looking at a tile
        if (initArr[i][j] === 0) {
          if (onlyTile(i, j).length === 1) {
            console.log("My man!");
            console.log(onlyTile(i, j));
            initArr[i][j] = onlyTile(i, j)[0];
          }
          // else if (j === 4) {
          //   // console.log("mmm");
          //   return onlyTile(i, j);
          // }
        }
      }
    }

  // for (var lp = 0; lp < 90; lp++) {
  //   for (var i = 0; i < initArr.length; i++) {
  //     // initArr[i] is looking at a row
  //     for (var j = 0; j < initArr.length; j++) {
  //       // initArr[i][j] is looking at a tile
  //       if (initArr[i][j] === 0) {
  //         if (allPotentials(i, j).length === 1) {
  //           initArr[i][j] = allPotentials(i, j)[0];
  //         } else if (j === 4) {
  //           // console.log(allPotentials(i, j));
  //           return allPotentials(i, j);
  //         }
  //       }
  //     }
  //   }
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

console.log(solve(firstTest));
// console.log(solve(secTest));

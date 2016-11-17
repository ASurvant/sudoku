// TODO: Once a tile has been given a value, it cannot be over-written with a new value

$(function() {
  $grid = generateGrid();

  // console.log(solve([
  //   [0,3,7,5,0,9,2,1,0],
  //   [4,0,0,6,0,8,0,7,5],
  //   [6,0,5,0,3,0,0,0,0],
  //   [0,0,0,0,0,1,0,0,2],
  //   [0,7,6,0,0,0,4,9,0],
  //   [9,0,0,4,0,0,0,0,0],
  //   [0,0,0,0,6,0,5,0,7],
  //   [2,6,0,8,0,7,0,0,9],
  //   [0,5,1,9,0,3,6,8,0]
  // ]));

  $currentSelection = [];

  function unselect(tile) {
    let idx = $currentSelection.indexOf(tile);
    if (idx > -1) {
      $currentSelection.splice(idx, 1);
    };
  }

  $('.num-selector').mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $('.num-selector').mouseleave(function() {
    $(this).css("background-color", "white");
  });

  $('div').click(function() {
    $(this).toggleClass("selected");
  });

  $('div').click(function() {
    if ($(this).hasClass("selected")) {
      $currentSelection.push("#" + this.id);
    } else {
      unselect("#" + this.id);
    }
  });

  // $('div').click(function() {
  //   $(this).text = $(this.id);
  //   console.log(this.id);
  // })

  // Fills in selected tiles with whatever the user says
  // then removes them from the selection array
  $('.num-selector').click(function() {
    for (var i = 0; i < $currentSelection.length; i++) {
      $($currentSelection[i]).text($(this).html());
      $($currentSelection[i]).toggleClass("selected");
    };

    for (var i = $currentSelection.length - 1; i > -1; i--) {
      for (var idx = 0; idx < $currentSelection.length; idx++) {
        for (var jdx = 0; jdx < $grid.length; jdx++) {
          if ($grid[jdx].indexOf($currentSelection[i]) > -1) {
            $grid[jdx][$grid[jdx].indexOf($currentSelection[i])] = ~~$(this).html();
          }
        }
      }

      unselect($currentSelection[i]);
      console.log($grid);
    };
  });

  $('.reset').click(function() {
    $('.space').text("");
    $currentSelection = [];
    $('.space.selected').toggleClass("selected");
    $grid = generateGrid();
  });

  $('.solve').click(function() {
    // console.log($currentSelection);
  });
});

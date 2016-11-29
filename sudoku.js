$(function() {
  $grid = generateGrid();

  $currentSelection = [];

  function unselect(tile) {
    let idx = $currentSelection.indexOf(tile);
    if (idx > -1) {
      $currentSelection.splice(idx, 1);
    };
  }

  $('.num-selector').mouseenter(function() {
    $(this).css("background-color", "#f1c40f");
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
    };
  });

  $('#reset').click(function() {
    location.reload();
  });

  $('#solve').click(function() {
    for (var i = 0; i < $grid.length; i++) {
      for (var j = 0; j < $grid.length; j++) {
        if (typeof($grid[i][j]) === "string") {
          $grid[i][j] = 0;
        }
      }
    }

    let solution = solve($grid);
    $guide = generateGrid();

    if (solution.length > 1) {
      for (var i = 0; i < $guide.length; i++) {
        for (var j = 0; j < $guide.length; j++) {
          if ($($guide[i][j]).text().length === 12) {
            $($guide[i][j]).text(solution[i][j]).css("font-family", 'Shadows Into Light').css("background-color", "#ecf0f1");
          }
        }
      }
    } else {
      $('h1').text("Invalid Input Or No Solution - Hit Reset");
    }
  });
});

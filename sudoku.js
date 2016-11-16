$(function() {
  $playerFilled = [
    [],[],[]
  ];

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

  $('.num-selector').click(function() {
    for (var i = 0; i < $currentSelection.length; i++) {
      $($currentSelection[i]).text($(this).html());
      $($currentSelection[i]).css("background-color", "white");
    };
    for (var i = $currentSelection.length - 1; i > -1; i--) {
      unselect($currentSelection[i]);
    };
  });

  $('.reset').click(function() {
    console.log("yes");
  });
});

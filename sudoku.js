$(function() {
  $('div').mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $('div').mouseleave(function() {
    $(this).css("background-color", "white");
  });
});

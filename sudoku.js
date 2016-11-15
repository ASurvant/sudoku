$(function() {
  $('div').mouseenter(function() {
      $(this).css("background-color", "yellow");

  });

  $('div').mouseleave(function() {
        $(this).css("background-color", "white");
  });

  $('div').click(function() {
    $(this).toggleClass("selected");
    // $('#numbers-container').toggleClass("selected");
  })

  // $('div').click(function() {
  //   $('#numbers-container').css("background-color", "yellow");
  //
  //   $(this).click(function() {
  //   });
  // });
});

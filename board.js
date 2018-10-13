$(function() {
  let alphabet = 'abcdefghi'
  let numbers = ''
  let alphaFocus = ''
  let span
  let numFocus

  while (alphabet !== '') {
    alphaFocus = alphabet.slice(0, 3).split('')
    numbers = '123456789'

    while (numbers !== '') {
      span = $('<span />').addClass('g-container')
      numFocus = numbers.slice(0, 3).split('')
      $.each(alphaFocus, function(idx, letter) {
        $.each(numFocus, function(idx, number) {
          span.append(`<div id="${letter}${number}" class="space"> </div>`)
        });
      });

      numbers = numbers.slice(3)
      $('.board-container').append(span)
    }

    alphabet = alphabet.slice(3)
    console.log('alphabet be like ' + alphabet)
  }

  let numStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < numStrings.length; i++) {
    $('#numbers-container').append(`<div id="${numStrings[i]}" class="num-selector">${i+1}</div>`)
  }
});

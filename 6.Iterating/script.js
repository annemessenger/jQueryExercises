$(document).ready(function() {

  // Class exercise: other files were supplied

  $('div.sandbox > div > ul > li:even').css('background-color', 'black');
  $('div.sandbox > div > ul > li:odd').css('background-color', 'gray');
  $('<p>Note that in jQuery, "even" is index 0, which is list item 1.</p>').appendTo('div.sandbox > div > ul');
});
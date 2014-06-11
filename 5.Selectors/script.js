$(document).ready(function() {

  // Class exercise: other files were supplied

  $('.sandbox p:nth-child(2)').css("color", "yellow");
  console.log('changed the text color of the second paragraph');
  $('.sandbox p:nth-child(1)').css("background-color", "cyan");
  console.log('changed the background of the first paragraph');
  $('.sandbox p:nth-child(3)').remove();
  console.log('removed the third paragraph');
  $('.sandbox li:nth-child(4)').css("color", "cyan");
  console.log('changed the text color of the fourth list item');
  $('.sandbox li:nth-child(2)').text("I did it!");
  console.log('changed the text of the second list item to say "I did it!"');
});
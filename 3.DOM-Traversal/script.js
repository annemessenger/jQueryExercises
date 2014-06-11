$(document).ready(function() {

  // Class exercise: other files were supplied
 
  $('div.sample > p > span.nextText').text($('div.sample > p > span.targetText').text());
  $('.targetText').parent().siblings().text($('.targetText').text());
});
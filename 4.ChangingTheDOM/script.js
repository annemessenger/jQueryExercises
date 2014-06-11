$(document).ready(function() {

  // Class exercise: other files were supplied

  $('div.removeMe > p').text('');
  console.log("text removed from the paragraph in the div of class 'removeMe'");
  $('div.removeMe > p').remove();
  console.log("removed paragraph in the div of class 'removeMe'");
  $('div.removeMe').remove();
  console.log("removed the div of class 'removeMe'");
  $("<div class='target'></div>").appendTo('div.sandbox');
  console.log("added a div of class 'target' to the div of class 'sandbox'.");
  $("<p></p>").appendTo('div.target');
  console.log("inserted a paragraph into the above div");
  $("div.target > p").text("Added text to the new paragraph.");
  console.log("add text to the above paragraph");
});
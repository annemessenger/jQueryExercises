$(document).ready(function() {

  // Class exercise: other files were supplied

  // set the number of items to add, and click to add

  var totalItems = 0;
  $('button.add-item').click(function() {
    var numItems = $('div.sandbox > div > p > select').val();
    if (numItems !== "") {
      for (var i = 1; i <= numItems; i++) {
        var nextItem = Number(totalItems) + i;
        var listItem = "List item " + (nextItem);
        $($("div.template > li").clone().text(listItem)).appendTo(".sample-list"); 
      }
      totalItems += Number(numItems);
      if (totalItems > 1) {
        $('div.sandbox > div > p:last-child').html('New lines added: <span class="count"></span>');
      }
      $('.count').text(totalItems); 
    }
  });
});
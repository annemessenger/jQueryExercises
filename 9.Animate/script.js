$(document).ready(function() {

  // Class exercise: other files were supplied

  var LEFT = 0;
  var RIGHT = 1;
  var target2State = LEFT; // starts off at the left

  // hide and show target 1
  $('#run1').click(function() {
    $('div.target').toggle();
  });

  // change target2 to/from left/transparent and right/opaque
  $('#run2').click(function() {
    if (target2State === LEFT) {
      $("div.target2").animate({
        left:'200px',
        opacity:'1.0'
      });
      target2State = RIGHT;
    }
    else {
      $("div.target2").animate({
        left:'0px',
        opacity:'0.0'
      });
      target2State = LEFT;
    }
  });

});
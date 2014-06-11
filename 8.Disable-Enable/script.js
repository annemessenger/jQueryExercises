$(document).ready(function() {

  // Class exercise: other files were supplied

  // Disable first button
  $('#firstButton').prop("disabled", true); 

  // Set callback to demonstrate that first button is really disabled
  $('#firstButton').click(function() {
    alert("The first button was clicked.");
  });

  // Second button's callback
  $("#secondButton").click(function() {

    // If first button is disabled, enable it; if it's enabled, disable it.
    var value = $('#firstButton').prop("disabled");
    if (value === true) {
      $('#firstButton').prop("disabled", false);
    }
    else {
      $('#firstButton').prop("disabled", true);
    }
  }); 

});
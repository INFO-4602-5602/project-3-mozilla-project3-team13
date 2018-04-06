tabs = ["most","least"];
// Sets the initial tabPosition to 0 (all)
var tabPosition = 0;

$(document).ready(function() {  // do when document is loaded
    switchTabs(tabPosition)
});


// When you click a button, use the switchTabs() function
$("#most").click(function() {
  switchTabs(0)
});

$("#least").click(function() {
  switchTabs(1)
});


// This function switches highlight and content based on tabPosition.
// tabPosition 0 = all; 1 = upon enrollment; 2 = end of first year; 3 = end of second year; 4 = other

function switchTabs(tabPosition) {
  if (tabPosition == 0){
    // Show all majors image and hide others
      $("#most-content").show();
      $("#least-content").hide();

  // Make all majors button active and all others inactive
      $("#most").addClass("active");
      $("#least").removeClass("active");

    // reset tabPosition (just in case)
      tabPosition = 0;
  }

  if (tabPosition == 1){
    // Show upon enrollment image and hide others
      $("#most-content").hide();
      $("#least-content").show();

      // Make upon enrollment button active and all others inactive
          $("#most").removeClass("active");
          $("#least").addClass("active");

      tabPosition = 1;
  }

}

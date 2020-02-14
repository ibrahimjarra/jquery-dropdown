$(document).ready(function() {
  var hide = $(".dictionary").hide();
  $("#button").click(function() {
    $(".dictionary").toggle();
  });
});

/*

var hide = $(".dictionary").hide();
  $("#button").click(function() {
    if (hide) {
      $(".drop_down").css("align-items", "flex-start");
      $("#dropDown").height("300px");
      $(".dictionary").show();
    };
    else {
      $("#dropDown").height("auto");
      $(".dictionary").hide();
    };
  });

  */

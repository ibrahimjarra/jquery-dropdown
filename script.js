
$(document).ready(function() {
  var hide = $(".dictionary").hide();
  var open = true;
  $("#button").click(function() {
    if (open) {
      $(".drop_down").css("align-items", "flex-start");
      $("#dropDown").height("300px");
      var show = $(".dictionary").show();
      open = false;
    } 
    else if (!open) {
      $("#dropDown").height("auto");
      hide = $(".dictionary").hide();
    } else {
        pass;
    };
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
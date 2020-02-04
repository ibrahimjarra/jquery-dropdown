$(document).ready(function() {
  $(".dictionary").hide();

  $("#button").click(function() {
    $(".drop_down").css("align-items", "flex-start");
    $("#dropDown").height("300px");
    $(".dictionary").show();
    $("#button").click(function() {
      $("#dropDown").height ("auto");
      $(".dictionary").hide();
    });
  });
});

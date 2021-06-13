$(document).ready(function () {
  $("button").addClass("animated");
  $(".btn").addClass("shake");
  $("#target1").addClass("btn-primary");
  $("#target2").css("color", "red");
  $("#target3").prop("disabled", true);
  $("#target4").html("<em>#target4</em>");
  $("#target5").remove();
  $("#target2").appendTo("#right-well");
  $("#target6").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "blue");
  $("#click-btn").click(function () {
    $("p").hide();
  });
  $("div").animate({ left: "10px" });
});

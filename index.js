$(document).ready(function () {
  $("button").addClass("animated");
  $(".btn").addClass("shake");
  $("#target1").addClass("btn-primary");
  $("#target2").css("color", "red");
  $("#target3").prop("disabled", true);
  $("#click-btn").click(function () {
    $("p").hide();
  });
  $("div").animate({ left: "10px" });
});

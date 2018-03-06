var counter = 0;
$("button.btnCat").on("click", function() {
  $("div.btnCat").attr("hidden", true);
  var id = $(this).attr("id");
  $("div." + id).removeAttr("hidden");
  $(".counter").text("Number of count is: 0");
  counter = 0;
});

$(".img").on("click", function() {
  counter += 1;
  $(this)
    .siblings(".counter")
    .html("Number of count is: " + counter);
});

$("button.btnCat").on("click", function() {
  $("div.btnCat").attr("hidden", true);
  var id = $(this).attr("id");
  $("div." + id).removeAttr("hidden");
});

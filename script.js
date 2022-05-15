$(document).ready(function () {
  $("#selectFigure").change(function (event) {
    event.preventDefault();
    const className = $("#selectFigure option:selected").attr("class");
    $("#figure").removeClass().addClass(className);
  });

  $("#color").on("input", function (event) {
    event.preventDefault();
    $("#figure").css("background-color", $(this).val());
  });
});

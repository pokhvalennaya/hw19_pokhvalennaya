$(document).ready(function () {
  $("#selectFigure").change(function (event) {
    event.preventDefault();
    const className = $("#selectFigure option:selected").attr("class");
    $("#figure").removeClass().addClass(className);
  });

  $("#color").change(function (event) {
    event.preventDefault();
    const color = event.target.value;
    $("#figure").css("background-color", color);
  });
});

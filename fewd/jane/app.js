$("li").click(moveul);

function moveul() {
  // reformat ul
  $("ul")
    .css("flex-direction", "row")
    .css("justify-content", "center")
    .css("height", "0px");
  $(".colorCircle")
    .css("height", "25px")
    .css("width", "25px")
    .css("font-size", "8px");
  //.transition().duration(10000000)
  // reformat title
  $("#projectTitle").remove();
  $("#templateTitle")
    .css("margin", "50px auto 15px")
    .css("padding", "0px");
  $(".seperator")
    .css("width", "5%")
    .css("margin", "5px auto 5px")
    .css("padding-top", "0px");
  $("#projectDesc").remove();
  // move ul to top
  let ul = $("ul");
  $("body").prepend(ul);
}

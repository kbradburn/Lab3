function manipulate()
{
  document.getElementById("frame").style.border = "solid"

  //getters and setters
  var width = document.getElementById("width");
  var bred = document.getElementById("brscale");
  var bblue = document.getElementById("bbscale");
  var bgreen = document.getElementById("bgscale");
  var border_width = document.getElementById("border_w");
  var red = document.getElementById("rscale");
  var blue = document.getElementById("bscale");
  var green = document.getElementById("gscale");

  //changers
  var color = "rgb("+bred.value+","+bgreen.value+","+bblue.value+")";
  document.getElementById("frame").style.borderColor = color;
  var background = "rgb("+red.value+","+green.value+","+blue.value+")";
  document.getElementById("frame").style.backgroundColor = background;
  var temp = width.value+"px";
  document.getElementById("frame").style.borderWidth = temp;
}

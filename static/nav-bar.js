$(function () {
    var bar = '';
    bar+= '<div class="topnav" id="myTopnav">';
    bar += '<a href="home.html" class="active">Home</a>';
    bar += '<a href="news.html">News</a>';
    bar += '<a href="about.html">About</a>';
    bar += '<a href="javascript:void(0);" class="icon" onclick="myFunction()">';
    bar += '<i class="fa fa-bars"></i>';
    bar += '</a>';
    bar += '</div>';

    $("#main-bar").html(bar);
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


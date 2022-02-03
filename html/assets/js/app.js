window.addEventListener("message", function (event) {
  var v = event.data;
  console.log(v.name);
  console.log(v.photo);
  $(".steamid").html(v.name);
  $(".steamimg").attr("src", v.photo);
});

$("#stage").hide();
$("#snow").hide();
var pointer = $("#cursor");
$(document).on("mousemove", function (event) {
  pointer.css({
    top: event.pageY + "px",
    left: event.pageX + "px",
  });
});
$.get(
  "https://raw.githubusercontent.com/RodericAguilar/LoadTest/main/Load",
  function (data) {
    $(".updatesinfo p").html(data);
  }
);
var myAudio = document.getElementById("music");
myAudio.volume = 0.1;
var play = false;
var logo = false;
$(".fa-volume-up").click(function () {
  if (play) {
    $("#volumeup i").attr("class", "fas fa-volume-mute background");
    myAudio.pause();
    play = false;
  } else {
    $("#volumeup i").attr("class", "fas fa-volume-up background");
    myAudio.play();
    play = true;
  }
});
$(".fa-snowflake").click(function () {
  $("#snow").toggle();
});

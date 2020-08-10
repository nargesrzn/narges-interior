$(document).ready(function () {
  // loader
  $(".loader-wrapper").css("display", "none");
  // hamburger menu
  $(".ham-icon").click(function () {
    $(".menu").css("width", "100%");
    $(".menu-items").css("width", "50%");
  });
  $(".close").click(function () {
    $(".menu").css("width", "0");
    $(".menu-items").css("width", "0");
  });
});

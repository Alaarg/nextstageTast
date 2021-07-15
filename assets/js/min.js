$(window).ready(function () {
  $(".bar").click(function () {
    $(".nav_list").toggleClass("active");
    $(".nav_overly").addClass("active");
  });
  $(".close_nav").click(function () {
    $(".nav_list").removeClass("active");
    $(".nav_overly").removeClass("active");
  });
  $(".nav_overly").click(function () {
    $(".nav_list").removeClass("active");
    $(".nav_overly").removeClass("active");
  });
});

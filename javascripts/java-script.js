$(document).ready(function () {
  // Правая кнопка
  $(".rightarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      setTimeout(function () {
        $(".zona1").fadeIn(600);
      }, 600);
    }
  });
  $(".leftarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      setTimeout(function () {
        $(".zona1").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    }
  });
});

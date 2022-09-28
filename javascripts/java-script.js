$(document).ready(function () {
  // Правая кнопка
  $(".rightarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/priyutplace1.png)");
      $(".pluscontainer").css("display", "block");
      $(".aboutbox3").css("display", "block");
      $(".aboutbox4").css("display", "block");
      $(".aboutbox5").css("display", "block");
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/cafeplace1.png)");
      $(".pluscontainer").css("display", "block");
      $(".aboutbox3").css("background-image", "url(./img/cafeplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/cafeplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/cafeplace4.png)");
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/factoryplace1.png)");
      $(".pluscontainer").css("display", "block");
      $(".aboutbox3").css("background-image", "url(./img/factoryplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/factoryplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/factoryplace4.png)");
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/vhodplace.png)");
      $(".pluscontainer").css("display", "none");
      $(".aboutbox3").css("display", "none");
      $(".aboutbox4").css("display", "none");
      $(".aboutbox5").css("display", "none");
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

  // Плюсы в зоне приюта

  $(".pluspriytspace1").mouseover(function () {
    $(".pluspriytspace1.pluscontainer").animate({ width: "13.2vw" }, "slow");
    $(".pluspriytspace1 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluspriytspace1").mouseleave(function () {
    $(".pluspriytspace1.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluspriytspace1 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluspriytspace2").mouseover(function () {
    $(".pluspriytspace2.pluscontainer").animate({ width: "11vw" }, "slow");
    $(".pluspriytspace2 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluspriytspace2").mouseleave(function () {
    $(".pluspriytspace2.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluspriytspace2 p").animate({ opacity: "0" }, "slow");
  });
});

$(document).ready(function () {

//   $(".petleftclick").click(function() {
//   $(".alert").css("display", "none");
// });
// });
//
// $(".petrightclick").click(function() {
// $(".alert").css("display", "block");
// });
// });

  $(".rightarrow").click(function () {
    if ($(".zona1").is(":visible")) {
      $(".zona1").fadeOut(600);
      $(".pluspriytspace1").css("display", "block");
      $(".pluspriytspace2").css("display", "block");
      $(".pluspriytspace3").css("display", "block");
      $(".pluspriytspace4").css("display", "block");
      $(".aboutbox3").css("display", "block");
      $(".aboutbox4").css("display", "block");
      $(".aboutbox5").css("display", "block");
      $(".aboutbox2").css("background-image", "url(./img/priyutplace1.png)");
      $(".aboutbox3").css("background-image", "url(./img/priyutplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/priyutplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/priyutplace4.png)");
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/cafeplace1.png)");
      $(".pluspriytspace1").toggleClass("pluscafespace1");
      $(".pluspriytspace2").toggleClass("pluscafespace2");
      $(".pluspriytspace3").toggleClass("pluscafespace3");
      $(".pluspriytspace4").toggleClass("pluscafespace4");
      $(".aboutbox3").css("background-image", "url(./img/cafeplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/cafeplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/cafeplace4.png)");
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      $(".aboutbox2").css("background-image", "url(./img/factoryplace1.png)");
      $(".pluscafespace1").toggleClass("plusfactoryspace1");
      $(".pluscafespace2").toggleClass("plusfactoryspace2");
      $(".pluscafespace3").toggleClass("plusfactoryspace3");
      $(".pluscafespace4").toggleClass("plusfactoryspace4");
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
      $(".plusfactoryspace1").css("display", "block");
      $(".plusfactoryspace2").css("display", "block");
      $(".plusfactoryspace3").css("display", "block");
      $(".plusfactoryspace4").css("display", "block");
      $(".aboutbox3").css("display", "block");
      $(".aboutbox4").css("display", "block");
      $(".aboutbox5").css("display", "block");
      $(".aboutbox2").css("background-image", "url(./img/factoryplace1.png)");
      $(".aboutbox3").css("background-image", "url(./img/factoryplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/factoryplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/factoryplace4.png)");
      setTimeout(function () {
        $(".zona4").fadeIn(600);
      }, 600);
    } else if ($(".zona2").is(":visible")) {
      $(".zona2").fadeOut(600);
      $(".pluscontainer").css("display", "none");
      $(".aboutbox2").css("background-image", "url(./img/vhodplace.png)");
      $(".aboutbox3").css("display", "none");
      $(".aboutbox4").css("display", "none");
      $(".aboutbox5").css("display", "none");
      setTimeout(function () {
        $(".zona1").fadeIn(600);
      }, 600);
    } else if ($(".zona3").is(":visible")) {
      $(".zona3").fadeOut(600);
      $(".pluscafespace1").toggleClass("pluspriytspace1");
      $(".pluscafespace2").toggleClass("pluspriytspace2");
      $(".pluscafespace3").toggleClass("pluspriytspace3");
      $(".pluscafespace4").toggleClass("pluspriytspace4");
      $(".aboutbox2").css("background-image", "url(./img/priyutplace1.png)");
      $(".aboutbox3").css("background-image", "url(./img/priyutplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/priyutplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/priyutplace4.png)");
      setTimeout(function () {
        $(".zona2").fadeIn(600);
      }, 600);
    } else if ($(".zona4").is(":visible")) {
      $(".zona4").fadeOut(600);
      $(".plusfactoryspace1").toggleClass("pluscafespace1");
      $(".plusfactoryspace2").toggleClass("pluscafespace2");
      $(".plusfactoryspace3").toggleClass("pluscafespace3");
      $(".plusfactoryspace4").toggleClass("pluscafespace4");
      $(".aboutbox2").css("background-image", "url(./img/cafeplace1.png)");
      $(".aboutbox3").css("background-image", "url(./img/cafeplace2.png)");
      $(".aboutbox4").css("background-image", "url(./img/cafeplace3.png)");
      $(".aboutbox5").css("background-image", "url(./img/cafeplace4.png)");
      setTimeout(function () {
        $(".zona3").fadeIn(600);
      }, 600);
    }
  });

  // ?????????? ?? ???????? ????????????

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

  $(".pluspriytspace3").mouseover(function () {
    $(".pluspriytspace3.pluscontainer").animate({ width: "9.4vw" }, "slow");
    $(".pluspriytspace3 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluspriytspace3").mouseleave(function () {
    $(".pluspriytspace3.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluspriytspace3 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluspriytspace4").mouseover(function () {
    $(".pluspriytspace4.pluscontainer").animate({ width: "14.6vw" }, "slow");
    $(".pluspriytspace4 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluspriytspace4").mouseleave(function () {
    $(".pluspriytspace4.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluspriytspace4 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluscafespace1").mouseover(function () {
    $(".pluscafespace1.pluscontainer").animate({ width: "13vw" }, "slow");
    $(".pluscafespace1 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluscafespace1").mouseleave(function () {
    $(".pluscafespace1.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluscafespace1 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluscafespace2").mouseover(function () {
    $(".pluscafespace2.pluscontainer").animate({ width: "10vw" }, "slow");
    $(".pluscafespace2 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluscafespace2").mouseleave(function () {
    $(".pluscafespace2.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluscafespace2 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluscafespace3").mouseover(function () {
    $(".pluscafespace3.pluscontainer").animate({ width: "12vw" }, "slow");
    $(".pluscafespace3 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluscafespace3").mouseleave(function () {
    $(".pluscafespace3.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluscafespace3 p").animate({ opacity: "0" }, "slow");
  });

  $(".pluscafespace4").mouseover(function () {
    $(".pluscafespace4.pluscontainer").animate({ width: "9vw" }, "slow");
    $(".pluscafespace4 p").animate({ opacity: "1" }, "slow");
  });
  $(".pluscafespace4").mouseleave(function () {
    $(".pluscafespace4.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".pluscafespace4 p").animate({ opacity: "0" }, "slow");
  });

  $(".plusfactoryspace1").mouseover(function () {
    $(".plusfactoryspace1.pluscontainer").animate({ width: "9vw" }, "slow");
    $(".plusfactoryspace1 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfactoryspace1").mouseleave(function () {
    $(".plusfactoryspace1.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".plusfactoryspace1 p").animate({ opacity: "0" }, "slow");
  });

  $(".plusfactoryspace2").mouseover(function () {
    $(".plusfactoryspace2.pluscontainer").animate({ width: "9vw" }, "slow");
    $(".plusfactoryspace2 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfactoryspace2").mouseleave(function () {
    $(".plusfactoryspace2.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".plusfactoryspace2 p").animate({ opacity: "0" }, "slow");
  });

  $(".plusfactoryspace3").mouseover(function () {
    $(".plusfactoryspace3.pluscontainer").animate({ width: "16vw" }, "slow");
    $(".plusfactoryspace3 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfactoryspace3").mouseleave(function () {
    $(".plusfactoryspace3.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".plusfactoryspace3 p").animate({ opacity: "0" }, "slow");
  });

  $(".plusfactoryspace4").mouseover(function () {
    $(".plusfactoryspace4.pluscontainer").animate({ width: "10vw" }, "slow");
    $(".plusfactoryspace4 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfactoryspace4").mouseleave(function () {
    $(".plusfactoryspace4.pluscontainer").animate({ width: "2.604vw" }, "slow");
    $(".plusfactoryspace4 p").animate({ opacity: "0" }, "slow");
  });

  $(".plusfloor1").mouseover(function () {
    $(".plusfloor1.pluscontainerfloors").animate({ width: "11.6vw" }, "slow");
    $(".plusfloor1 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfloor1").mouseleave(function () {
    $(".plusfloor1.pluscontainerfloors").animate({ width: "2.604vw" }, "slow");
    $(".plusfloor1 p").animate({ opacity: "0" }, "slow");
  });
  $(".plusfloor1").click(function () {
    document.location.href = "./priyut.html";
  });

  $(".plusfloor2").mouseover(function () {
    $(".plusfloor2.pluscontainerfloors").animate({ width: "11.6vw" }, "slow");
    $(".plusfloor2 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfloor2").mouseleave(function () {
    $(".plusfloor2.pluscontainerfloors").animate({ width: "2.604vw" }, "slow");
    $(".plusfloor2 p").animate({ opacity: "0" }, "slow");
  });
  $(".plusfloor2").click(function () {
    document.location.href = "./priyut.html";
  });

  $(".plusfloor3").mouseover(function () {
    $(".plusfloor3.pluscontainerfloors").animate({ width: "13.8vw" }, "slow");
    $(".plusfloor3 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfloor3").mouseleave(function () {
    $(".plusfloor3.pluscontainerfloors").animate({ width: "2.604vw" }, "slow");
    $(".plusfloor3 p").animate({ opacity: "0" }, "slow");
  });
  $(".plusfloor3").click(function () {
    document.location.href = "./priyut.html";
  });

  $(".plusfloor4").mouseover(function () {
    $(".plusfloor4.pluscontainerfloors").animate({ width: "9.6vw" }, "slow");
    $(".plusfloor4 p").animate({ opacity: "1" }, "slow");
  });
  $(".plusfloor4").mouseleave(function () {
    $(".plusfloor4.pluscontainerfloors").animate({ width: "2.604vw" }, "slow");
    $(".plusfloor4 p").animate({ opacity: "0" }, "slow");
  });
  $(".plusfloor4").click(function () {
    document.location.href = "./priyut.html";
  });

  $(".bigbutton").click(function () {
    document.location.href = "./404.html";
  });

  $(".lefttarrow").click(function() {
    $(".eventscroll").animate({
      scrollLeft: $(".event1").offset().left
    }, 2000);
  });

  $(".rightarrow").click(function() {
    $(".eventscroll").animate({
      scrollLeft: $(".event8").offset().left
    }, 2000);
  });

  $(".rightarrow").click(function() {
    $(".itemscroll").animate({
      scrollLeft: $(".item6").offset().left
    }, 2000);
  });

  $(".event1").hover(function() {
    $(".event1").toggleClass("event1shop");
  });

  $(".event1").click(function () {
    document.location.href = "./404.html";
  });

  $(".event2").hover(function() {
    $(".event2").toggleClass("event2shop");
  });

  $(".event2").click(function () {
    document.location.href = "./404.html";
  });

  $(".event3").hover(function() {
    $(".event3").toggleClass("event3shop");
  });

  $(".event3").click(function () {
    document.location.href = "./404.html";
  });

  $(".event7").hover(function() {
    $(".event7").toggleClass("event7shop");
  });

  $(".event7").click(function () {
    document.location.href = "./404.html";
  });

  $(".event8").hover(function() {
    $(".event8").toggleClass("event8shop");
  });

  $(".event8").click(function () {
    document.location.href = "./404.html";
  });

  $(".item1").hover(function() {
    $(".item1").toggleClass("item1shop");
  });

  $(".item1").click(function () {
    document.location.href = "./404.html";
  });

  $(".item2").hover(function() {
    $(".item2").toggleClass("item2shop");
  });

  $(".item2").click(function () {
    document.location.href = "./404.html";
  });

  $(".item3").hover(function() {
    $(".item3").toggleClass("item3shop");
  });

  $(".item3").click(function () {
    document.location.href = "./404.html";
  });

  $(".item4").hover(function() {
    $(".item4").toggleClass("item4shop");
  });

  $(".item4").click(function () {
    document.location.href = "./404.html";
  });

  });

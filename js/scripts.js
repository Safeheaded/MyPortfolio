$(function() {
  // SERVICES SCRIPTS
  var active = 1;

  $("#section-3_nav li").click(function() {
    var target = $(this).attr("data-description");
    if (target != active) {
      $(".section-3_description").eq(active - 1).css("opacity", "0");
      setTimeout(function() {
        $(".section-3_description").eq(active - 1).css("display", "none");
        $("#section-3_description-" + target + "").css("display", "block");

        setTimeout(function() {
          $("#section-3_description-" + target + "").css("opacity", "1");
        }, 15);

        active = target;
      }, 500);
    }
    $("#section-3_nav li").each(function() {
      $(this).css("color", "grey");
    });
    $(this).css("color", "#B9B9B9");
  });

  // SETTING SLIDER

  var selected = 1;

  $("#slider-nav1 li").click(function() {
    var next = $(this).index() + 1;
    if (next != selected) {
      $("#slider" + selected + "").css({
        opacity: "0"
      });

      setTimeout(function() {
        $("#slider" + selected + "").css({
          display: "none"
        });

        $("#slider" + selected + " .slide:first-child").css("margin-left", "0");

        $("#slider-nav2 li").each(function() {
          $(this).css("background-color", "grey");
        });

        $("#slider-nav2 li").eq(0).css("background-color", "#B9B9B9");

        $("#slider" + next + "").css({
          display: "block"
        });

        setTimeout(function() {
          $("#slider" + next + "").css({
            opacity: "1"
          });
        }, 15);

        selected = next;
      }, 500);

      $("#slider-nav1 li").each(function() {
        $(this).css("color", "grey");
      });
      $(this).css("color", "#B9B9B9");
    }
  });

  $("#slider-nav2 li").click(function() {
    var multiplier = $(this).index();

    $("#slider" + selected + " .slide:first-child").css(
      "margin-left",
      "-" + multiplier * 100 + "%"
    );

    $("#slider-nav2 li").each(function() {
      $(this).css("background-color", "grey");
    });

    $(this).css("background-color", "#B9B9B9");
  });

  // MENU

  $("#menu a").click(function(e) {
    e.preventDefault();

    var target = $(this).attr("href");

    target = $("" + target + "").offset().top;

    console.log(target);

    $.scrollTo(target, {
      duration: 500
    });
    // $("body").animate({ scrollTop: target + "px" }, 500);
  });

  var isOpen = false;

  $("#hamburger-menu").click(function() {
    if (isOpen === false) {
      $("#menu").css("transform", "translateX(0px)");
      isOpen = !isOpen;
    } else {
      $("#menu").css("transform", "translateX(330px)");
      isOpen = !isOpen;
    }
  });

  $("h4,menu-title").click(function() {
    $("#menu").css("transform", "translateX(300px)");
    isOpen = !isOpen;
  });
});

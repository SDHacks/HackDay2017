var sectionIds = ["#about", "#resources", "#schedule", "#faq"];

// Denotes top offset for more natural page location guidance in nav
var TOTOP_OFFSET = 100;

$(document).ready(function() {
  if ($(window).scrollTop() > 0) $(".sd-nav--fixed").removeClass("sd-nav--top");
  if ($(window).scrollTop() + $(window).height()
       > $(document).height() - 800) $(".sd-link-top").hide();

  $(window).scroll(function() {
    scrolled();
  });
  $(window).bind('touchmove', function() {
    scrolled();
  });

  $(".mobile-link").click(function() {
    $(".sd-nav").toggleClass("nav-open");
  });
  $(".sd-nav--mobile-link").click(function() {
    $(".sd-nav").toggleClass("nav-open");
  });
});

function scrolled() {
  var toTop = $(window).scrollTop();

  if (toTop > 0) {
    // $(".sd-nav--fixed").fadeIn();
    $(".sd-nav--fixed").removeClass("sd-nav--top");
  } else {
    // $(".sd-nav--fixed").fadeOut();
    $(".sd-nav--fixed").addClass("sd-nav--top");
  }

  for (var i=0; i<sectionIds.length; i++) {
    var currId = sectionIds[i];
    if (toTop + TOTOP_OFFSET > $(currId).offset().top &&
        toTop + TOTOP_OFFSET < $(currId).offset().top + $(currId).height()) {
      $(".sd-nav--list a li").removeClass("active");
      $(".sd-nav--list a[href='" + currId + "'] li").addClass("active");
    }
  }

  if (toTop + $(window).height() > $(document).height() - 800) {
    $(".sd-link-top").fadeIn();
  } else {
    $(".sd-link-top").fadeOut();
  }
}
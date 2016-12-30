// var sectionIds = ["#about", "#resources", "#schedule", "#faq"];
var sectionIds = ["#about", "#schedule", "#faq"];

// Denotes top offset for more natural page location guidance in nav
var TOTOP_OFFSET = 100;

$(document).ready(function() {
  if ($(window).scrollTop() > 0) $(".sd-nav--fixed").removeClass("sd-nav--top");
  if ($(window).scrollTop() + $(window).height()
       > $(document).height() - 800) $(".sd-link-top").hide();

  $(window).scroll(function() {
    scrolled();
    return true;
  });
  $(window).bind('touchmove', function() {
    scrolled();
    return true;
  });

  $(".mobile-link").click(function() {
    $(".sd-nav").toggleClass("nav-open");
  });
  $(".sd-nav--mobile-link").click(function() {
    $(".sd-nav").toggleClass("nav-open");
  });

  // Get Updates form TODO: move this to other file
  $("#updates-button, #updates-button-submit").focus(function(e) {
    $("#updates-button").attr('placeholder', 'Enter Email');
    $("#updates-button-submit").removeClass('no-opacity');
  });
  $("#updates-button, #updates-button-submit").focusout(function(e) {
    $("#updates-button").attr('placeholder', 'Get Updates!');
    // $("#updates-button-submit").addClass('no-opacity');
  });
});


function scrolled() {
  var toTop = $(window).scrollTop();

  if (toTop > 0) {
    $(".sd-nav--fixed").removeClass("sd-nav--top");
  } else {
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
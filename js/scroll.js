var sectionIds = ["#about", "#resources", "#schedule", "#faq"];

// Denotes top offset for more natural page location guidance in nav
var TOTOP_OFFSET = 100;

$(document).ready(function() {
  $(".sd-nav--fixed").hide();

  $(window).scroll(function() {
    var toTop = $(window).scrollTop();

    if (toTop > 0) {
      $(".sd-nav--fixed").slideDown();
    } else {
      $(".sd-nav--fixed").slideUp();
    }

    for (var i=0; i<sectionIds.length; i++) {
      var currId = sectionIds[i];
      if (toTop + TOTOP_OFFSET > $(currId).offset().top &&
          toTop + TOTOP_OFFSET < $(currId).offset().top + $(currId).height()) {
        $(".sd-nav--list a li").removeClass("active");
        $("a[href='" + currId + "'] li").addClass("active");
      }
    }
  });

  // Todo: organize per section
});
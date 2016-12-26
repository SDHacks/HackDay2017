var sectionIds = ["#about", "#resources", "#schedule", "#faq"];

$(document).ready(function() {
  $(".sd-nav--fixed").hide();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".sd-nav--fixed").slideDown();
    } else {
      $(".sd-nav--fixed").slideUp();
    }


  });

  // Todo: organize per section
});
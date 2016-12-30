subscribeStatus = false;

$(document).ready(function() {
  $("#sdhx-subscribe, #sdhx-email").click(function(event) {
    event.stopPropagation();
    // Block submission and open textbox
    if (subscribeStatus === false) {
      event.preventDefault();
      subscribeStatus = true;
      $("#sdhx-subscribe").css('min-width', '30%');
      $("#sdhx-subscribe").attr("value", "Go!");
      $("#sdhx-email").focus();
      $("#sdhx-subscribe").css('min-width', '30%');
    }
    // Trigger the submission when button is filled
    else {
      return true;
    }
  });

  // Close button when clicked outside
  $('html').click(function() {
    if(!(document.getElementById("sdhx-email").value)) {
      subscribeStatus = false;
      $("#sdhx-subscribe").css('min-width', '100%');
      setTimeout(function() {
      $("#sdhx-subscribe").attr("value", "Get Updates!");
      }, 250);
    } else {
      subscribeStatus = true;
    }
  });
});
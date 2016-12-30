subscribeStatus = false;

$(document).ready(function() {
  $("#updates-subscribe, #updates-email").click(function(event) {
    event.stopPropagation();
    // Block submission and open textbox
    if (subscribeStatus === false) {
      event.preventDefault();
      subscribeStatus = true;
      $("#updates-subscribe").css('min-width', '30%');
      $("#updates-subscribe").attr("value", "Go!");
      $("#updates-email").focus();
      $("#updates-subscribe").css('min-width', '30%');
    }
    // Trigger the submission when button is filled
    return true;
  });

  // Close button when clicked outside
  $('html').click(function() {
    if(!(document.getElementById("updates-email").value)) {
      subscribeStatus = false;
      $("#updates-subscribe").css('min-width', '100%');
      setTimeout(function() {
        $("#updates-subscribe").attr("value", "Get Updates!");
      }, 250);
    } else {
      subscribeStatus = true;
    }
  });
});
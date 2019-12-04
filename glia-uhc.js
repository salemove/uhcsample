$(document).ready(function() {
  $("#glia-customerservice-button").click(function () {
    $("#glia-phonenumber-button").show();
    $("#glia-customerservice-button").hide();
    $("#glia-smallbusiness-button").show();
  });
  
  $("#glia-smallbusiness-button").click(function () {
    $("#glia-customerservice-button").hide();
    $("#glia-smallbusiness-button").hide();
    $("#glia-phonenumber-button").show();
  });
 });
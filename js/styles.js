var id;
var name;

var naming = function() {
  if (id === "gold") {
    return "Gold Dust Meridian";
  }
}


$(document).ready(function(){

  $('a').click(function(event) {
    event.preventDefault();
    window.location.href = "order_form.html";
    id = $(this).attr('id');
    function
    alert(id);
    });
  });

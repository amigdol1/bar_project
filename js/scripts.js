var id;
var name;

var naming = function() {
  if (id === "gold") {
    name = "Gold Dust Meridian";
  } else if (id === "slingshot") {
    name = "Slingshot Lounge";
  } else if (id === "gemini") {
    name = "Gemini";
  } else if (id === "lardo") {
    name = "Lardo";
  } else if (id === "aalto") {
    name = "Aalto Lounge";
  } else if (id === "spaceroom") {
    name = "Space Room";
  } else if (id === "bog") {
    name = "Bar of the Gods";
  } else if (id === "circa33") {
    name = "Circa 33";
  } else if (id === "sweethereafter") {
    name = "Sweet Hereafter";
  }
}


$(document).ready(function(){

  $('a').click(function(event) {
    event.preventDefault();
    window.location.href = "order_form.html";
    id = $(this).attr('id');
    naming();
    alert(name);
    });
  });

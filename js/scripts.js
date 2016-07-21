//Backend logic

function Drink(name, drink, time) {
  this.name = name,
  this.drink = drink,
  this.time = time
}

Drink.prototype.fullOrder = function() {
  return this.name + ", your " + this.drink + " will be ready in " + this.time;
}

//location back-end
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


$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    window.location.href = "order_form.html";
    id = $(this).attr('id');
    naming();
    alert(name);
    });
  $("form#order_form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input:radio[name=age]:checked").val());
    var timeInput = $("select#eta").val();
    var drinkInput = $("input#drink").val();

    var order = new Drink(nameInput, drinkInput, timeInput);

    if (drinkInput <= 1 ) {
      alert("Not old enough, bummer!");
    } else {
      $("#result").append("<h2>" + order.fullOrder() + "</h2>");
    }

  });
});

//Backend logic

function Drink(name, drink, time) {
  this.name = name,
  this.drink = drink,
  this.time = time
}

Drink.prototype.fullOrder = function() {
  return this.name + ", your " + this.drink + " will be ready in " + this.time;
}


$(document).ready(function() {
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

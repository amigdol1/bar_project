//Form back-end logic

function Drink(name, drink, time) {
  this.name = name,
  this.drink = drink,
  this.time = time
}

// Drink.prototype.fullOrder = function() {
//   return this.name + this.drink + this.time;
// }

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
  $('a').click(function() {
    window.location.href = "order_form.html";
    id = $(this).attr('id');
    naming();
  });

  $("#bar_result").append("<h1>" + "Ready to take your order at " + name + "!" + "</h1>");

  $("form#order_form").submit(function(event) {
    event.preventDefault();
    // if ($("input#drink" ).val().length >= 1 ) {
    // alert( "Validated..." );
    // return;
    // } else {
    // alert("Fill out yo drink");
    // return false;
    // }
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input:radio[name=age]:checked").val());
    var timeInput = $("select#eta").val();
    var drinkInput = $("input#drink").val();

    var newOrder = new Drink(nameInput, drinkInput, timeInput);

    var finalOrder = [];
    finalOrder.push(newOrder);
    finalOrder.forEach(function() {
      if (ageInput <= 1 ) {
        alert("Not old enough, bummer!");
      } else {
        $("#confirm_area").show();
        $("#result").show().prepend("<p>Ready in: " + newOrder.time + "</p>").prepend("<p>Drink: " + newOrder.drink + "</p>").prepend("<p class='first'>Name: " + newOrder.name + "</p>");
        // clear fields
        $("input#name").val("");
        $("input#age").prop("checked", false);
        $("input#drink").val("");
      }
    });
    event.preventDefault();
  });

  $("#confirm_submit").click(function() {
    $("#thanks").append("<h1>Thanks for your order at " + name + ". " + "See you soon!</h1>").hide().fadeIn(2000);
    $("#pre_order").hide();
  });

});

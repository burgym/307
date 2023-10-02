/*
 * @author Burgy Malori
 * @version 1.0 / 12.06.23
 */

$().ready(function () {
  indexCtrl.centraliserErreurHttp;
});

class homeCtrl {
  constructor() {
    http.loadAll(bestFood);
    $("#all").click(() => {
      indexCtrl.loadHome();
    });
    $("#burger").click(() => {
      indexCtrl.loadBurger();
    });
    $("#pizza").click(() => {
      indexCtrl.loadPizza();
    });
    $("#drink").click(() => {
      indexCtrl.loadDrinks();
    });
    $("#dessert").click(() => {
      indexCtrl.loadDessert();
    });
    $("#map").click(() => {
      indexCtrl.loadMap();
    });
  }

  bestFood(data) {
    var container = document.getElementById("data");
    container.innerHTML = "";

    var row;

    for (var i = 0; i < data.length; i++) {
      var food = data[i];

      if (i % 4 === 0) {
        row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
      }

      var square = document.createElement("div");
      square.className = "food-square";

      var name = document.createElement("h3");
      name.textContent = food.name;
      square.appendChild(name);

      var image = document.createElement("img");
      image.src = food.img;
      image.onerror = function () {
        this.classList.add("image-not-available");
      };
      square.appendChild(image);

      var price = document.createElement("p");
      price.textContent = "Price: " + food.price + " $";
      square.appendChild(price);



      var popup = document.createElement("div");
      popup.className = "description-popup";
      popup.innerHTML = "<p>Notes: ";

      for (var j = 0; j < food.rate; j++) {
        popup.innerHTML += "⭐";
      }

      popup.innerHTML += "</p><p>" + food.dsc + "</p>";
      square.appendChild(popup);

      square.addEventListener("mouseover", function () {
        popup.style.display = "block";
      });

      square.addEventListener("mouseout", function () {
        popup.style.display = "none";
      });

      row.appendChild(square);
    }
  }


}

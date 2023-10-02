/*
 * @author BUrgy Malori
 * @version 1.0 / 13.06.2023
 */

class HttpService {
  constructor() {}

  loadAll() {
    const self = this;

    $.ajax({
      url: "https://free-food-menus-api-production.up.railway/best-foods",
      type: "GET",
      success: function (data) {
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
      },
      error: function (error) {
        console.log(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      },
    });
  }

  appelBurger() {
    $.ajax({
      url: "https://free-food-menus-api-production.up.railway.app/burgers",
      type: "GET",
      success: function (data) {
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
      },
      error: function (error) {
        console.log(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      },
    });
  }

  affichePizza() {
    var self = this; // Ajoutez cette ligne pour conserver la référence à l'instance actuelle

    $.ajax({
      url: "https://free-food-menus-api-production.up.railway.app/pizzas",
      type: "GET",
      success: function (data) {
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
      },
      error: function (error) {
        console.log(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      },
    });
  }

  loadDessert() {
    var self = this; // Ajoutez cette ligne pour conserver la référence à l'instance actuelle

    $.ajax({
      url: "https://free-food-menus-api-production.up.railway.app/desserts",
      type: "GET",
      success: function (data) {
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
      },
      error: function (error) {
        console.log(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      },
    });
  }

  loadDrink() {
    var self = this; // Ajoutez cette ligne pour conserver la référence à l'instance actuelle

    $.ajax({
      url: "https://free-food-menus-api-production.up.railway.app/drinks",
      type: "GET",
      success: function (data) {
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
      },
      error: function (error) {
        console.log(
          "Erreur lors de la récupération des données de l'API :",
          error
        );
      },
    });
  }
}

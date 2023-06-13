/*
 * @author BUrgy Malori
 * @version 1.0 / 13.06.2023
 */


$().ready(function () {
  indexCtrl = new IndexCtrl();
  http = new HttpService();
  indexCtrl.centraliserErreurHttp;
});

class IndexCtrl {
  constructor() {
    this.view = new viewLoader();
    this.loadHome();
  }
  // Loaders

  loadHome() {
    this.view.viewLoader("home", function () {
      new homeCtrl();
    });
  }

  loadBurger() {
    this.view.viewLoader("burger", function () {
      new BurgersCtrl();
    });
  }
  loadPizza() {
    this.view.viewLoader("pizza", function () {
      new PizzaCtrl();
    });
  }
  loadDessert() {
    this.view.viewLoader("dessert", function () {
      new DessertCtrl();
    });
  }
  loadDrinks() {
    this.view.viewLoader("boisson", function () {
      new DrinkCtrl();
    });
  }
  loadMap() {
    this.view.viewLoader("map", function () {
      new MapCtrl();
    });
  }

  // End Loaders
  readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();

    rawFile.overrideMimeType("application/json");

    rawFile.open("GET", file, true);

    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };

    rawFile.send(null);
  }

  // Error Management
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "There is no access to the requested ressource !";
        } else if (xhr.status === 404) {
          msg = "Page not found [404] !";
        } else if (xhr.status === 500) {
          msg = "Internal Server Error [500] !";
        } else if (exception === "parsererror") {
          msg = "JSON Error !";
        } else if (exception === "timeout") {
          msg = "[Time Out] !";
        } else if (exception === "abort") {
          msg = "Ajax request aborted !";
        } else {
          msg = "Unknown Error : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }
}
//  End Error Management

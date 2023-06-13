/*
 * @author Burgy Malori
 * @version 1.0 / 13.06.2023
 */

class DessertCtrl {
  constructor() {
   http.loadDessert();
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

  afficherErreurHttp(msg) {
    alert(msg);
  }

 
}

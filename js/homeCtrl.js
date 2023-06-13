/*
 * @author Burgy Malori
 * @version 1.0 / 12.06.23
 */

$().ready(function () {
  indexCtrl.centraliserErreurHttp;
});

class homeCtrl {
  constructor() {
   http.loadAll();
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

 
}

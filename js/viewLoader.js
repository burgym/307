/*
 * @author Burgy Malori
 * @version 2.0 / 02.10.2023
 */

class viewLoader {
  constructor() { }

  viewLoader(view, callback) {
    $("#view").load("views/" + view + ".html", function () {
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }
}

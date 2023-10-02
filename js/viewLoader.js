/*
 * @author BUrgy Malori
 * @version 1.0 / 12.06.2023
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

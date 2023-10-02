/*
 * @author Burgy Malori
 * @version 2.0 / 02.10.2023
 */

class MapCtrl {
  constructor() {
    this.afficherCarte();



  }

  //cette méthode va me être appelé par mon bouton "Vos prochaines destinations" et va afficher la map avec des points.

  afficherCarte() {
    const RedMarkerIcon = L.icon({
      iconUrl: "https://307.burgym.emf-informatique.ch/Projet/img/redmarkericon.png",
      iconSize: [18, 30],
      iconAnchor: [9, 30],
      popupAnchor: [0, -20],
    });
    const mapid = L.map("mapid").setView(
      [40.732179019666106, -73.98438249553737],
      3
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapid);

    //Ceci va me permettre d'aller chercher mon fichier json et d'ajouter des points sur la map.

    indexCtrl.readTextFile("https://307.burgym.emf-informatique.ch/Projet/json/restaurants.json", function (text) {
      var data = JSON.parse(text);

      data.forEach(function (element) {

        console.log(element.coordonnees);

        L.marker(element.coordonnees, { icon: RedMarkerIcon })

          .addTo(mapid)

          .bindPopup(element.nom);
      });
    });
  }
}
// First part, it displays the screen from exercice 2.1

// Main container
let firstScreen = document.createElement("div");
document.body.appendChild(firstScreen);
firstScreen.style.height = "200px";
firstScreen.style.width = "500px";
firstScreen.style.display = "none";

// Main title
let title = document.createElement("h1");
firstScreen.appendChild(title);
title.textContent = "Cinéma Le Dauphin";

// Main text
let para = document.createElement("p");
firstScreen.appendChild(para);
para.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";

// start_button
let start_button = document.createElement("input");
start_button.type = "button";
start_button.value = "Voir les films à l'affiche cette semaine";
firstScreen.appendChild(start_button);

// Function that displays the first screen
function showScreen(container, display){
  container.style.display = display;
};

showScreen(firstScreen, "block");


// Movie tab creation, exercice 2.2
let movieTab = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DESIR DE BONHEUR", "Clément Schneiider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corré du Sud", "2018", "1h06", "vostfr"]
]

// Second function, exercice 2.3
function featuredMovies(tab) {
  let i = 0;
  let j = 1;
  let k = 0;
  let currentElement1;
  let currentElement2;
  let currentElement3;
  let headerTab = tab[0];
  let tableTab = document.createElement("table");
  document.body.appendChild(tableTab);
  let headTab = document.createElement("thead");
  tableTab.appendChild(headTab);
  headTab.style.textAlign = "left";
  let trTopTab = document.createElement("tr");
  headTab.appendChild(trTopTab);
  let bodyTab = document.createElement("tbody");
  tableTab.appendChild(bodyTab);

  while (i < headerTab.length) { // on traite le cas du header du tableau
    currentElement1 = headerTab[i];
    let thTab = document.createElement("th");
    trTopTab.appendChild(thTab);
    thTab.textContent = currentElement1;
    i++;
  }

  while (j < tab.length) { // on traite les lignes du tableau
    currentElement2 = tab[j];
    let trTab = document.createElement("tr");
    bodyTab.appendChild(trTab);
    k = 0;
    while (k < currentElement2.length) {
      currentElement3 = currentElement2[k];
      let tdTab = document.createElement("td")
      trTab.appendChild(tdTab);
      tdTab.textContent = currentElement3;
      k++;
    }
    j++
  }
  return tab;
}

// Last part of the exercice: 2.4

 start_button.addEventListener("click", function(){
   firstScreen.style.display = "none";
   featuredMovies(movieTab);
 });

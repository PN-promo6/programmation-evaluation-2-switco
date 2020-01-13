let fishlist = [
  ["Ordre", "Famile", "Nom Vernaculaire", "Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
]

function fishTab(tab) {
  let i = 0;
  let j = 1;
  let k = 0;
  let currentElement1;
  let currentElement2;
  let currentElement3;
  let headerTab = tab[0];
  let tableTab = document.createElement("table");
  document.body.appendChild(tableTab);
  tableTab.style.border = "solid";
  let headTab = document.createElement("thead");
  tableTab.appendChild(headTab);
  headTab.style.color = "red";
  headTab.style.fontWeight = "900";
  let trTopTab = document.createElement("tr");
  headTab.appendChild(trTopTab);
  let bodyTab = document.createElement("tbody");
  tableTab.appendChild(bodyTab);

  while (i < headerTab.length) {
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
}

fishTab(fishlist);

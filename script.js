// SELECTEURS

//Pour selectionné une "balise" avec JS -> document.querySelector("h4");
//Pour selectionné une "balise" en CSS il faut -> Ex: ("h4");
//Pour selectionné une "classe" en HTML il faut mettre un (.) en plus -> Ex: (".myTilte");
//Pour selectionné un "id" en HTML il faut mettre un (#) en plus -> Ex: ("#myTilte");

// On peut faire du "CSS" avec JS -> document.querySelector("h4").style.background = "yellow";

// Mettre le Selecteur dans une variable est une méthode plus moderne.
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event");

// questionContainer.addEventListener("événement", () function)
questionContainer.addEventListener("click", () => {
  questionContainer.style.background = "red";
  questionContainer.style.borderRadius = "250px";
  questionContainer.style.color = "yellow";
});

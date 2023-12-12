// ************************* SELECTEURS ************************* //

//Pour selectionné une "balise" avec JS -> document.querySelector("h4");
//Pour selectionné une "balise" en CSS il faut -> Ex: ("h4");
//Pour selectionné une "classe" en HTML il faut mettre un (.) en plus -> Ex: (".myTilte");
//Pour selectionné un "id" en HTML il faut mettre un (#) en plus -> Ex: ("#myTilte");

// On peut faire du "CSS" avec JS ->
//document.querySelector("h4").style.background = "yellow";

// Mettre le Selecteur dans une variable est une méthode plus moderne.
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// ************************* CLICK EVENT ************************* //

// const questionContainer = document.querySelector(".click-event");
// questionContainer.addEventListener("événement", () function).
// questionContainer.addEventListener("click", () => {
// Il est possible de modifer le style comme sa ->

// questionContainer.style.background = "purple";
// questionContainer.style.borderRadius = "250px";
// questionContainer.style.color = "black";
// Mais le plus pratique est de créé une classe en CSS avec le style voulu et la nommer ici.
// questionContainer.classList.toggle("question-clicked");
// });

// ************************* CLICK EXERCICE N°1 ************************* //

const questionContainer = document.querySelector(".click-event");
// Deux façon de nomé un ID.
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.getElementById("response");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  answer.style.background = "red";
});

// Ordre de priorité : <div> > #id > .class > baliseHTML

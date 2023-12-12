// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// * (e) = évenement
// * key = touche
// * mouse = souris

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Selecteur ************************* //

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

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Click Event ************************* //

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

// ************************* Click Exercice N°1 ************************* //

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

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Mouse Event ************************* //

// Pour avoir les donnés de OU la souris a été ->
// window.addEventListener("mousemove", (e) => {
// console.log(e);
// })

// ************************* Mouse Move Exercice N°1 ************************* //

// Pour qu'il est un cercle qui suis la souris.
const mousemove = document.querySelector(".mousemove");

// Le (e) dans la fonction + un log(e) va nous dire ou la souris à été sur notre page.
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// Quand il y a qu'une seul ligne après la (=>) on n'est pas obligé de mettre des {}.
window.addEventListener("mousedown", () => mousemove.style.transform = "scale(2) translate(-25%, -25%)");

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* KeyPress Event ************************* //

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// Il es possible d'ajouter des sons à sa page avec Js.

// Un son simple ->
// const ring = () => {
//   const audio = new Audio();
//   audio.src = "Enter.mp3";
//   audio.play();
// }

// Pour faire une boite à son ->
// const ring = (key) => {
//   const audio = new Audio();
//   audio.src = key + ".mp3";
//   audio.play();
// }

// Le (e) dans la fonction + un log(e) va nous dire quel touche à été appuyer sur notre page.
// document.addEventListener ('keypress', (e) => {
//   key.textContent = e.key;

//   if (e.key === "m") {
//     keypressContainer.style.background = "blue";
//   } else if (e.key === "p") {
//     keypressContainer.style.background = "grey";
//   } else {
//     keypressContainer.style.background = "red";
//   }

//   // Pour un son simple ->
//   // ring();

//   // Pour une boite à son
//   ring(e.key);
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Scroll Event ************************* //

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // Avec (window.scrollY) ont obtient la valeur en pixel de ce qui a été scroller.
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Form Event ************************* //

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";


// (e) -> pour récupérer les datas de l'évenement.
inputName.addEventListener("input", (e) => {
  // log(e.target.value) -> pour savoir ce qui a été écrit dans l'input en temps réel.
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  // log(e.target.value) -> pour savoir ce qui a été choisi.
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  // Avec "e.preventDefault()" on annule le changement de page.
  e.preventDefault();
  
  // Checked les CGV pour pouvoir Valider.
  if (cgv.checked) {
    // .innerHTML sert à mettre du HTML dans du Js.
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert('Veuillez accepter les CGV');
  }
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* Laod Event ************************* //

// Ce qui se trouve dans load, sera afficher une fois que la totalité de la page sera chargé.
window.addEventListener("load", () => {
  console.log("Document chargé");
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

// ************************* ForEach ************************* //

// Pour sélectionner plusieurs classes en même temps (d'ou l'interet de mettre 2 classe au balise) ->
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
  e.target.style.transform = "scale(0.7)";
  });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //
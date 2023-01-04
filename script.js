/**
 * @author: LASME Ayou Emeline 
 */

/******************************** Exercice1: Debut ********************************/

/*// À l'aide d'une propriété DOM, récupérez le h1et console.log.
let h1 = document.querySelector("h1");
console.log(h1);

//supprimer le dernier paragraphe de la balise article :
let article = document.querySelector("article");
let dernierP = article.lastElementChild;
article.removeChild(dernierP);

//ajouter un écouteur d'événement qui change la couleur d'arrière-plan du h2 en rouge lorsqu'il est cliqué :
let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "yellowgreen";
});

//ajouter un écouteur d'événement qui masque le h3 lorsqu'il est cliqué :
let h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

//ajouter un bouton qui met le texte de tous les paragraphes en gras :  
let button = document.createElement("button");
button.innerHTML = "Mettre en gras";
document.body.appendChild(button);

button.addEventListener("click", function() {
    let ps = document.querySelectorAll("p");
    for (let p of ps) {
        p.style.fontWeight = "bold";
    }
});

//Question Bonus1: Pour définir la taille de la police sur une taille de pixel aléatoire comprise entre 0 et 100 lorsque vous survolez le h1 :
h1.addEventListener("mouseover", function() {
    let size = Math.floor(Math.random() * 101);
    h1.style.fontSize = size + "px";
});

//Question Bonus2: Pour faire disparaître le 2e paragraphe lorsque vous survolez :
let p2 = document.querySelector("article > p:nth-child(2)");
p2.style.transition = "opacity 1s";

p2.addEventListener("mouseover", function() {
    p2.style.opacity = "0";
});

p2.addEventListener("mouseout", function() {
    p2.style.opacity = "1";
});*/

/******************************** Exercice1: Fin ********************************/


/******************************** Exercice2: Debut ********************************/

/*// recuperation du formulaire 
 const form = document.querySelector('form');
 console.log(form);

 // Récupérez les entrées par leur nameattribut et console.log les
 const fnameInput = document.querySelector('#fname');
 const lnameInput = document.querySelector('#lname');
 console.log(fnameInput, lnameInput);

 // Obtenir les elements de input par l'attribut name
 const fnameInput2 = document.querySelector('input[name=fname]');
 const lnameInput2 = document.querySelector('input[name=lname]');
 console.log(fnameInput2, lnameInput2);

 // Ajout d'un submit event listener dans la balise form
 form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
     event.preventDefault();

     // Obtenir la valeur des elements de input
     const fname = fnameInput.value;
     const lname = lnameInput.value;

     // Make sure the values are not empty
     if (fname === '' || lname === '') {
         return;
     }

   // creer une liste item pour les valeurs de input
     const fnameItem = document.createElement('li');
     fnameItem.textContent = fname;
     const lnameItem = document.createElement('li');
     lnameItem.textContent = lname;

   // ajouter une liste items dans usersAnswer list
     const liste = document.querySelector('.usersAnswer');
     liste.ppendChild(fnameItem);
     liste.appendChild(lnameItem);
 });*/



/******************************** Exercice2: Fin ********************************/




/******************************** Exercice3: Debut ********************************/

/*// Déclarez une variable globale
let allBoldItems;
            
// Créez une fonction appelée getBold_items()qui ne prend aucun paramètre.
  function getBoldItems() {
      allBoldItems = document.querySelectorAll('p strong');
  }

// Créez une fonction appelée highlight()qui change la couleur de tout le texte en gras en bleu.
  function highlight() {
      allBoldItems.forEach((item) => {
          item.style.color = 'blue';
      });
  }

// Créez une fonction appelée return_normal()qui change la couleur de tout le texte en gras en noir.
  function returnNormal() {
      allBoldItems.forEach((item) => {
          item.style.color = 'black';
      });
  }

// Obtenir les elements en gras dans la page
  getBoldItems();

//ajouter un evenement listeners dans l'element paragraphe
  const paragraphe = document.querySelector('p');
  paragraphe.addEventListener('mouseover', highlight);
  paragraphe.addEventListener('mouseout', returnNormal);*/

/******************************** Exercice3: Fin ********************************/





function simple_calculation() {

let num1, num2, somme, difference, produit, quotient;

num1 = parseFloat(prompt("Saisir le premier numéro :"));

num2 = parseFloat(prompt("Saisir le deuxième numéro :"));

// Le calcul des opérations

somme = num1 + num2;
difference = num1 - num2;
produit = num1 * num2;

if (num2 !== 0) {
    quotient = num1 / num2;
}

else {
    quotient = "La division par zéro est indéfinie (∞)";
}

// Ou nous pouvons en écrire une courte en une ligne comme ceci : 

//// quotient = num2 !== 0 ? num1 / num2 : "La division par zéro est indéfinie (∞)";

// Mais comme je suis nostalgique du langage C, je vais écrire ce qui précède tel quel.

// Ou l'affichage des résultats dans la console

alert(
    "La somme est : " + somme +
    "\n\nLa difference est : " + difference +
    "\n\nLe produit est : " + produit +
    "\n\nLe quotient est : " + quotient
  )

// Ou l'affichage des résultats dans la console

// console.log("La somme est : " + sum);
// console.log("La difference est : " + difference);
// console.log("Le produit est : " + product);
// console.log("Le quotient est : " + quotient);

}
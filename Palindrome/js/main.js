//Input per permettere l'inserimento della parola
let regularString = prompt("Inserisci qui la parola tua parola");

//Invoca funzione
palindrome(regularString);






// Funzione per parole palindrome
function palindrome(regularString){

//Scomporre la parola in array e ricomporla in stringa una volta girata
let reverseString = regularString.split('').reverse().join('');
console.log(reverseString);

//verificare se la condizione è vera o falsa 
if (regularString === reverseString){
    return alert("è palindroma!!");
}
else{
    return alert("Riprova");
}

}


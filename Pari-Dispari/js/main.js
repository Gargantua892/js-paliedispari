//Scelta del numero da parte dell'utente (da 1 a 5)
let userChoice = prompt("Scegli, Pari o dispari?").toLowerCase();
console.log(userChoice);

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNumber);

evenOrOdd (userNumber);

function evenOrOdd (userNumber){

    //generazione numero casuale del computer (da 1 a 5)
    let computerNumber = Math.floor((Math.random() * 5) + 1);
    console.log("Numero computer " + computerNumber);

    let numSum = userNumber + computerNumber;

    if (numSum % 2 === 0){
        numSum = "pari";
        userChoice === numSum
    }
    else{
        numSum = "dispari";
    }

    if (userChoice === numSum){
        alert("Ha vinto l'utente");
    }
    else{
        alert("Ha vinto il pc");
    }
}




//funzione per stabilire se un numero è pari o dispari


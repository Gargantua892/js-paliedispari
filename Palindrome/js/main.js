let result = document.getElementById("result");
console.log(result);

document.getElementById("verifica").addEventListener("click", 
function (){
    //Input per permettere l'inserimento della parola
    const regularString = document.getElementById("input-parola").value;
    
    //Invoca funzione
    palindrome(regularString);


    
});



// Funzione per parole palindrome
function palindrome(regularString){

//Scomporre la parola in array e ricomporla in stringa una volta girata
let reverseString = regularString.split('').reverse().join('');
console.log(reverseString);

    //verificare se la condizione è vera o falsa 
    if (regularString === reverseString){
        // alert("Si è palindroma");
        result.innerHTML = `<h3>YESSS! è palindroma</h3>`;
        result.style.display = "block";
    }
    else{
        result.innerHTML = `<h3>Nope! Riprova :(</h3>`;
        result.style.display = "block";
    }



}


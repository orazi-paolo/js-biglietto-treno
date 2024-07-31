/*   
1. Chiedere all' utente i chilometri da percorrere
2. Quanti anni hai?
3. calcola il prezzo del viaggio
4. applica uno sconto del 20% se il cliente è minorenne
5. applica uno sconto del 40% se il cliente è over 65
6. il prezzo finale dovrà avere massimo due decimali 
BONUS
1. stampa in pagina
2. aggiungere in pagina il prezzo prima dello sconto età del cliente e il chilometraggio
3. abbellisci con il css
*/

// chiedere all'utente i chilometri da percorrere
const km = parseInt(prompt('Quanti chilometri devi fare?',50));
console.log('chilometri ' + km);

// Quanti anni hai?
const age = parseInt(prompt('Quanti anni hai?', 15));
console.log('anni ' + age);

// calcola il prezzo del viaggio
const price = km * 0.21;
console.log('prezzo senza sconti ' + price);

// applica uno sconto del 20% se il cliente è minorenne e del 40% se il cliente è over 65
let discountedPrice;
if(age < 18){
    discountedPrice = price - (price * 0.2)
}else if(age > 65){
    discountedPrice = price - (price * 0.4)
}
console.log('prezzo scontato ' + discountedPrice)

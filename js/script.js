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
let price = km * 0.21;
console.log('prezzo senza sconti ' + price);

// applica uno sconto del 20% se il cliente è minorenne e del 40% se il cliente è over 65
let discountedPrice;
if(age < 18){
    discountedPrice = price - (price * 0.2)
    discountedPrice = discountedPrice.toFixed(2)
    console.log('prezzo scontato ' + discountedPrice)
}
 if(age > 65){
    discountedPrice = price - (price * 0.4)
    discountedPrice = discountedPrice.toFixed(2)
    console.log('prezzo scontato ' + discountedPrice)
}

// solo due decimali
price = price.toFixed(2)


// stampa in pagina e aggiungere in pagina il prezzo prima dello sconto età del cliente e il chilometraggio
if(age > 18 && age < 65){
    document.getElementById('price').innerText = 'Dovrai percorrere ' + km + ' km' + ', il prezzo del biglietto è di euro ' + price;
}else if(age < 18){
    document.getElementById('price').innerText = 'Dovrai percorrere ' + km + ' km' + ', il prezzo del biglietto è di euro ' + price + ', dato che sei minorenne è stato applicato uno sconto del 20%, quindi dovrai pagare euro ' + discountedPrice;
}else if(age > 65){
    document.getElementById('price').innerText = 'Dovrai percorrere ' + km + ' km' + ', il prezzo del biglietto è di euro ' + price + ', dato che sei over 65 è stato applicato uno sconto del 40%, quindi dovrai pagare euro ' + discountedPrice;
}
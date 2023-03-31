// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).

Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.

In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/
user = [
  {
    name: 'Marco',
    lastName: 'Rossi',
    isAmbassador: true,
  },

  {
    name: 'Paul',
    lastName: 'Flynn',
    isAmbassador: false,
  },

  {
    name: 'Amy',
    lastName: 'Reed',
    isAmbassador: false,
  }
]

// login simulation
let session = 2;
console.log(`Ciao ${user[session].name} ${user[session].lastName}, che bello vederti!`);

const prices = [34, 50, 200]; // il carrello e' dinamico
const shippingCost = 50;

let totalCost = 0;
let totalCart = 0;

for (let i = 0; i < prices.length; i++) {
  totalCart += prices[i];
  console.log(`Prodotto n.${i + 1}: ${prices[i]} EUR`);
}

console.log(`Totale Carrello: ${totalCart} EUR`); // Stampa del totale del carrello


// se l'utente è ambassador, il prezzo è scontato del 30%
if (user[session].isAmbassador) {
  console.log(`Complimenti ${user[session].name}, sei un Ambassador! Hai diritto ad un 30% di sconto!`);
  console.log(`Sconto -${totalCart * 0.3} EUR`);
  totalCost = totalCart * 0.7;
  console.log(`Totale Carrello: ${totalCost} EUR`); // Stampa del totale del carrello scontato
} else {
  totalCost = totalCart;
  console.log(`Mi dispiace ${user[session].name}, ma non sei un Ambassador! E quindi non hai diritto al 30% di sconto!`);
}

// se il totalCost è minore di 100, aggiungiamo shippingCost
if (totalCost < 100) {
  totalCost += shippingCost;
  console.log(`Abbiamo aggiunto ${shippingCost} EUR di spedizione perche' il tuo carrello e' minore di 100 EUR`);
} else {
  console.log(`Spedizione GRATIS`);
}

console.log(`${user[session].name} puoi procedere pure al pagamento di ${totalCost} EUR per inviare l'ordine! Grazie!`);
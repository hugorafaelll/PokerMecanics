let suits = ['H','C','D','S'];
let ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let deck = [];
// loop para identificar todos os ranks 
for ( let suitCounter = 0; suitCounter < 4 ; suitCounter ++ ){
    for (let rankCount = 0 ; rankCount < 13 ; rankCount ++){

    // soma os dois loops consegue criar um baralho com os dois 
    // console.log( ranks[rankCount] + suits[suitCounter])
    deck.push(ranks[rankCount] + suits[suitCounter])
    }
}

console.log(deck)
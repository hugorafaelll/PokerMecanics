
function creatDeck () {
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
    }   return deck // doesnt return anything 
}



function shuffleDeck(deck){   // embaralha as 52 cartas com math flor 
for (let i = o ; i < 52 ; i ++){    //loop para identificar o deck 
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random()* 52);  // gera um numero aleatorio dentro do que foi sugerido no caso 52

        deck[i] = deck[randomIndex]; // no loop  e math  tem 52 seleciona o 52 e coloca dentro de i do loop 
        deck[randomIndex] =  tempCard ; //escolheu um numero aleatorio 


    }
}

let testDeck = creatDeck();
shuffleDeck (testDeck);
console.log(testDeck);
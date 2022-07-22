const poker = require('poker-hands'); // encontre a livraria poker-hands que iremos usar alguns metodos dele 


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
    }   return deck //  array  with ordened deck 
}



function shuffleDeck(deck){   // embaralha as 52 cartas com math flor 
for (let i = 0 ; i < 52 ; i ++){    //loop para identificar o deck 
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);  
        deck[i] = deck[randomIndex]; // dentro de cada i do deck icrementado gere uma posição ramdon dentro de 52
        deck[randomIndex] =  tempCard ; //escolheu um numero aleatorio 


    }
}


let counter = 0 ;


 do{

    let testDeck = creatDeck();  // cria baralho organizado
shuffleDeck(testDeck); // embaralha as cartas 


// passo 1 :  remover 5 primeiras cartas de um shuffle deck 

let showDown = testDeck.splice(0,5);   

console.log(showDown);

// passo 2 :  converter este array em string cada carta separada por um espaço 

var fiveCardHandString = showDown.join('');   
var resultado =  poker.getHandStrength(fiveCardHandString);

counter++;

}while(resultado ==7);// parar no loop do royal flush 

switch (fiveCardHandString){
    case 9:
        console.log("A high")
    break
    case 8 :
        console.log("Pair")
        break
    case 7 : 
    console.log("TWO PAIR")
    break
    case 6 :
    console.log("SET")
    break
    case 5 :
        console.log("Straight")
        break
    case 4 : 
        console.log("FLUSH")
    break
    case 3 :
        console.log("THATS A FULL HOUSE")
        break
    case 2 :
        console.log("thats a FOR OF A KING")
        break
    case 1 :
        console.log("almost there thets a STRAIGH FLUSH")
    default :
    console.log("YOU ALREADY DONE THATS A ROYAL STRAIGHT F ")
}

console.log(`demorou`+ ' ' + counter + '  '+ 'vezes');
//pices é um array
//The cards of the game are the object 
//Name and img are the cards'attributes 
const pieces = [
    { 
        name: 'fries',
        img: 'imgs/fries.png'
    },
    { 
        name: 'cheeseburguer',
        img: 'imgs/cheeseburger.png'
    },
    { 
        name: 'pizza',
        img: 'imgs/pizza.png'
    },
    { 
        name: 'hotdog',
        img: 'imgs/hotdog.png'
    },
    { 
        name: 'ice-cream',
        img: 'imgs/ice-cream.png'
    },
    { 
        name: 'milkshake',
        img: 'imgs/milkshake.png'
    },
    //We duplicate all the objects because we need pairs, as it's a memory game
    { 
        name: 'fries',
        img: 'imgs/fries.png'
    },
    { 
        name: 'cheeseburguer',
        img: 'imgs/cheeseburger.png'
    },
    { 
        name: 'pizza',
        img: 'imgs/pizza.png'
    },
    { 
        name: 'hotdog',
        img: 'imgs/hotdog.png'
    },
    { 
        name: 'ice-cream',
        img: 'imgs/ice-cream.png'
    },
    { 
        name: 'milkshake',
        img: 'imgs/milkshake.png'
    },
    
]

/* ----------- Embaralhando as cartas ----------- */

pieces.sort(() => 0.5 - Math.random())
//Math.random retorna um numero aleatorio de 0 a 1, ent�o o numero gerado ser� subtraido de 0.5
//Sort � uma fun��o de ordena��o

/* ----------- Some Variables ----------- */

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardschosen = []
let cardschosenId = []
const cardsWon = []

/* ----------- Creating the cards ----------- */

function createCards(){
    for(let i=0; i<pieces.length; i++){
        const cards = document.createElement('img')
        cards.setAttribute('src', 'imgs/blank.png') //Essa proprieda voc� atribui � propriedade src do cards = blank.png. Isso é feito para que todas fiquem viradas iguais, como num jogo de memória
        cards.setAttribute('data-id',i) 
        cards.addEventListener('click', flipCard) //Você passa para a função flipcard(mas não a chama) o evento click
        grid.appendChild(cards) //Grid is an existing HTML component and  Cards are new elements that I'm creatting 
    }
}

createCards()   

/* ----------- Checking if the cards flipped are the same ----------- */

function checkMate(){
    const allcards = document.querySelectorAll("#grid img")
    /* Here you clicked the same card */
    if (cardschosenId[0] == cardschosenId[1]){ //The cardschosenId validate the id, because of that not happen
        return;
    }
    /* Here you did a match */ 
    else if (cardschosen[0] == cardschosen[1]){ //The cardschosen validate the name, that why they can be equal
        alert("You found a match! Congratulations")
        allcards[cardschosenId[0]].setAttribute('src', 'imgs/white.png')
        allcards[cardschosenId[1]].setAttribute('src', 'imgs/white.png')
        allcards[cardschosenId[0]].removeEventListener('click', flipCard)
        allcards[cardschosenId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardschosen)
    }
    /* And here you clicked two different cards that doesn't match*/
    else{
        allcards[cardschosenId[0]].setAttribute('src', 'imgs/blank.png')
        allcards[cardschosenId[1]].setAttribute('src', 'imgs/blank.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardschosen = [] // Empty the array after the comparation because if don't, the checkMate funciton won't be called again 
    cardschosenId = []

    //Looking if all the matches were founded
    if(cardsWon.length == pieces.length/2){
        resultDisplay.innerHTML = 'Congratulation! You found them    all'
    }
}   

/* ----------- Flipping the cards ----------- */

//THIS - Se refere ao exato objeto que está sendo selecionado no momento
function flipCard(){
    const cardId = this.getAttribute('data-id'); //Every clicked element will have there id picked 
    cardschosen.push(pieces[cardId].name) //quando clicar, será adicionado ao fim do array
    cardschosenId.push(cardId)
    console.log(cardschosenId) //Salvando o id no array pois será necessário para fazer a comparação in the checkMate function
    this.setAttribute('src', pieces[cardId].img)
    if(cardschosen.length === 2){ //We will se if the cards fliped, are the same
        setTimeout(checkMate, 500) //A função setTimeout serve para atrasar o 'chamamento' de outra função --> setTimeout(funcao, tempoDeEspera);
    }
}
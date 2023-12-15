class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.deck = [];
        suits.forEach((suit) => {
            faces.forEach((face) => {
                this.deck.push(this.createCard(face, suit));
            })
        })
        console.log(this.deck);
    }


    createCard = (face, suit) => {
        return `${face} ${suit}`
    }
}


const cartas = new Deck();
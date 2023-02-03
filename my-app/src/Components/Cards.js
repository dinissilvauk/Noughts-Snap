import React from "react";

const Cards = (props) => {
  return (
    <div>
      Your deck is {props.deckId} and has {props.cardsLeft} cards remaining.
      <button onClick={props.drawTwoCards}>Draw 2 cards</button>
    </div>
  );
};

export default Cards;

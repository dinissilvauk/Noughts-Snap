import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Snap = () => {
  const [deckId, setDeckId] = useState(null);
  const [cardsLeft, setCardsLeft] = useState(null);
  const [snapFound, setSnapFound] = useState(false);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);

  useEffect(() => {
    newGameEvent();
  }, []);
  const newGameEvent = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDeckId(res.deck_id);
        setCardsLeft(res.remaining);
      });
  };

  const drawTwoCards = () => {
    if (cardsLeft === 0) {
      newGameEvent();
    } else {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCardsLeft(res.remaining);
          setCard1(res.cards[0]);
          setCard2(res.cards[1]);
          setSnapFound(res.cards[0].value === res.cards[1].value);
        });
    }
  };

  return (
    <div>
      <Cards
        deckId={deckId}
        cardsLeft={cardsLeft}
        card1={card1}
        card2={card2}
        snapFound={snapFound}
        drawTwoCards={drawTwoCards}
      />
    </div>
  );
};

export default Snap;

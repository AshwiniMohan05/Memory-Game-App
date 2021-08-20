import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import initializeDeck from '../../deck';
import './memoryGame.css'

function MemoryGame() {
  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [matchedImages, setMatchedCards] = useState([]);

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preLoadedImages()
  }, cards)

  const preLoadedImages = () => {
    cards.map(card => {
      const src = `img/${card.type}.png`
      new Image().src = src
    })
  }

  const handleClick = (id) => {
    if(flipped.length === 0){
      setFlipped([id])
    }
    else{
      if(sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if(checkForCardMatchById(id)){
        setMatchedCards([...matchedImages, flipped[0], id])
        resetCards()
      }
      else {
        setTimeout(resetCards, 2000)
      }
    }
  }  

  const resetCards = () => {
    setFlipped([])
  }

  const checkForCardMatchById = id => { 
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type
  }

  const sameCardClicked = id => flipped.includes(id);

  return (
    <div>
      <h1 className="title">Memory Game</h1>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        matchedImages={matchedImages}
      />
    </div>
  );
}

export default MemoryGame;
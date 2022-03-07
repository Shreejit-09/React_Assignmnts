import React,{useEffect,useState} from "react";
import './App.css';
import {Card} from './components/Card.jsx';
const cardImages=[
// { "src":"/images/blank.png"},
{"src":"/images/cheeseburger.png" , "matched":false},
{"src":"/images/fries.png" , "matched":false},
{"src":"/images/hotdog.png" , "matched":false},
{"src":"/images/ice-cream.png" , "matched":false},
{"src":"/images/milkshake.png" , "matched":false},
{"src":"/images/pizza.png" , "matched":false} ];

function App() {

  const [cards,setCards]= useState([]);
  const [turns, setTurns]=useState(0);
  const [choiceOne,setChoiceOne]=useState(null);
  const [choiceTwo,setChoiceTwo]=useState(null);


  function shuffleCards(){
    const shuffledCards=[...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }
 
  function handleChoice(card){
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    
  }

  function resetTurn(){
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns( prevTurns => prevTurns + 1)
  }
  //compare two cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      // console.log(choiceOne);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>{

          return prevCards.map(card => {
            if (card.src === choiceOne.src){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else{
        
       setTimeout(()=> resetTurn() ,1000);
      }
      
    }

  }, [choiceOne, choiceTwo]);
  console.log(cards);

  return (
    <div>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns:{turns}</p>
      <div className="card-grid">
      {cards.map((card,index) => (
        <Card key={index} 
        id = {card}
        src ={card.src}
        onChecked={handleChoice} 
        flipped = {card === choiceOne || card === choiceTwo || card.matched}
        />
        ))}
      </div>
    </div>

   
  );
}

export default App;


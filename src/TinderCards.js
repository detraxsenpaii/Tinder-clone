import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'elon musk',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
    },
    {
      name: 'jeff bezos',
      url:
        'https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e',
    },
  ]);

  const swiped = (direction, nameToDelete) =>{
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) =>{
    console.log(name + " left the screen");
  };

  return (
    <div className="TinderCards">
        <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard className= 'swipe'
        key={person.name}
        precentSwipe={['up','down']}
        onSwipe={(dir) => swiped(dir, person.name)}
        onCardLeftScreen = {()=> outOfFrame(person.name)}
        
        >
          <div
           style={{ backgroundImage: `url(${person.url})`}}
          className = "card">
          <h3>{person.name}</h3>

          </div>

        </TinderCard>
      ))}
    </div>
    </div>
  );
}

export default TinderCards;

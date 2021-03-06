import React from 'react';
import './card.css';

 const Card = props => {
  return (
    <div className="card-component">
      { props.starwarsChars.map(character => {
          return (
            <ProfileDescription 
              name={character.name}
              birthYear={character.birth_year}
              gender={character.gender}
              height={character.height}
              mass={character.mass}
            />
          );
        }) 
      }
    </div>
  );
};

const ProfileDescription = props => {
  return (
    <div className="profile-component">
      <h2 className="profile-header">{props.name}</h2>
      <ul className="profile-information-list">
        <li>Birth Year: {props.birthYear}</li>
        <li>Gender: {props.gender}</li>
        <li>Heigth: {props.height}</li>
        <li>Mass: {props.mass}</li>
      </ul>
    </div>
  );
}

export default Card; 
import { useState } from 'react';
import styles from './characterfilter.module.scss';

const CharacterFilter = (props) => {
  const onSelectedChar = (event) => {
    props.onSelectedCharacter(event.target.value);
  };

  return (
    <div className={styles.filter_container}>
      <select value={props.selectedChar} onChange={onSelectedChar}>
        <option value="All">All</option>
        {props.characters.map((character) => (
          <option value={character.name}>{character.name}</option>
        ))}
      </select>
      <select value={props.selectedChar} onChange={onSelectedChar}>
        <option value="All">Planets</option>
        {props.characters.map((character) => (
          <option value={character.homeworld}>{character.homeworld}</option>
        ))}
      </select>
    </div>
  );
};

export default CharacterFilter;

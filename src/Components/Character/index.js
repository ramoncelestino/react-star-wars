import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import styles from './character.module.scss';

const Character = (props) => {
  const [character, setCharacter] = useState([]);
  const [characterDetails, setCharacterDetails] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/id/${props.match.params.id}.json`);
      console.log(data);
      setCharacter(data);
    };

    fetchData();
  }, []);

  //swapi.dev/api/people/?search=r2

  useEffect(() => {
    const fetchChars = async () => {
      const url = `https://swapi.dev/api/people/?search=${character.name}`;
      const { data } = await api.get(url);
      console.log(url);
      console.log(character.name);

      setCharacterDetails(data);
    };

    fetchChars();
  }, []);

  return (
    <div className={styles.character}>
      <h1>{character.name}</h1>
      <a href={`/planets/${character.homeworld}`}>
        <h1>{character.homeworld}</h1>
        <img src="http://facetheforce.today/?i=1luke/400kylo-altbaby-yoda"></img>
      </a>
      <h1>Teste</h1>
    </div>
  );
};

export default Character;

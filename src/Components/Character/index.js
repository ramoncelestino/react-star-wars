import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import styles from './character.module.scss';

const Character = (props) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get(`/id/${props.match.params.id}.json`);
      console.log(data);
      setCharacter(data);
    };

    fetchData();
  }, []);

  //swapi.dev/api/people/?search=r2

  return (
    <div className={styles.character}>
      <h1>{character.name}</h1>
      <h1>Teste</h1>
    </div>
  );
};

export default Character;

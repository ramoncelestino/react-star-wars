import StarWarsCard from './StarWarsCard/';
import styles from './StarWarsCards.module.scss';

import { useEffect, useState } from 'react';

import { api } from '../services/api';
import CharacterFilter from './CharacterFilter';

const StarWarsCards = () => {
  const [posts, setPosts] = useState([]);

  const [filteredChar, setFilteredChar] = useState('All');

  const filterChangeHandler = (selectedChar) => {
    setFilteredChar(selectedChar);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('all.json');
      setPosts(data);
    };

    fetchData();
  }, []);

  let filteredChars = posts;

  if (filteredChar !== 'All')
    filteredChars = posts.filter((post) => {
      return post.name === filteredChar;
    });

  return (
    <div className={styles.search}>
      <CharacterFilter
        selectedChar={filteredChar}
        onSelectedCharacter={filterChangeHandler}
        characters={posts}
      />

      <div className={styles.post_cards}>
        <div className="row">
          {filteredChars.map((post) => (
            <div className="col-md-4">
              <StarWarsCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarWarsCards;

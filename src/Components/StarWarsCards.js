import StarWarsCard from './StarWarsCard/';
import './StarWarsCards.css';

import { useEffect, useState } from 'react';

import { api } from '../services/api';

const StarWarsCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('all.json', {
        params: {
          _sort: 'name',
          _order: 'desc',
        },
      });
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="post-cards">
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4">
            <StarWarsCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarWarsCards;

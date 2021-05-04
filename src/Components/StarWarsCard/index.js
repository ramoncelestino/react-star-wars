import React, { useState } from 'react';
import style from './starwarscard.module.scss';

const PostCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const imgUrl = `/img/people/${props.post.id}/1.jpg`;

  const changeCardSize = () => {
    setHovered(true);
  };

  const leaveCardSize = () => {
    setHovered(false);
  };

  return (
    <div className={style.card}>
      <img src={props.post.image} />
      <div className={style.card_content}>
        <h1>{props.post.name}</h1>
        <hr></hr>
        <p>
          <i className="fas fa-globe-americas fa-lg mr-2"></i>
          {props.post.homeworld}
        </p>

        <a href={`/characters/${props.post.id}`}>
          <button className="btn btn-outline-info">Saiba Mais</button>
        </a>
      </div>
    </div>
  );
};

export default PostCard;

import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Item (props){
  return (
    <Link to={`/show/${props.id}`} className={style.content}>
      <img src={props.image.medium} className={style.picture} />
      <h3 className={style.name}>{props.name}</h3>
    </Link>
  )
}

export default Item;
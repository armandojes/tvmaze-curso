import Container from '../../components/container';
import style from './style';
import Item from '../../components/item';
import React from 'react';


function View (props){
  return (
    <Container className={style.container}>
      {
        props.shows.map((item) => <Item key={item.id} {...item} /> )
      }
    </Container>
  )
}

export default View;
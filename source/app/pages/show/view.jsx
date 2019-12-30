import React from 'react';
import style from './style';
import Container from '../../components/container';

function View(props){
  return (
    <Container className={style.content}>
      <img 
      className={style.picture} 
      src={props.image.original} 
      />
      <section  className={style.summary}>
        <h1 className={style.name}>{props.name}</h1>
        <div dangerouslySetInnerHTML={{__html: props.summary}}></div>
      </section>
    </Container>
  )
}

export default View;
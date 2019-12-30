import React from 'react';
import style from './style';
import Container from '../container';

function Loading (props){
  return (
    <Container className={style.content}>
      <img 
        src="/public/preloader.gif" 
        alt="loading..." 
        className={style.picture}
      />
    </Container>
  )
}

export default Loading;
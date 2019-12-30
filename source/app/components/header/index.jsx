import React from 'react';
import style from './style';
import Container from '../container';
import { Link } from 'react-router-dom';

function Header (props){
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <Link className={style.link} to="/"> TVmaze </Link>
      </Container>
    </header>
  )
}

export default Header;
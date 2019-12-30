import React from 'react';
import style from './style';

function Container (props){
  return (
    <div className={`${style.content} ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Container;
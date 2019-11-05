import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

const OneSquare = styled.div(( props ) => ({
  width: '35px',
  height: '35px',
  border: '1px solid black',
  background: props.active ? 'white' : 'black',
  display: 'flex'
}));

const Number = styled.p((props) => ({
  display: props.active ? 'none' : 'block',
  fontSize: '10px',
  margin: '2px auto auto 2px',
  width: '5px',
  padding: '0'
}));

const Letter = styled.p((props) => ({
  display: props.active ? 'none' : 'block',
  fontSize: '25px',
  margin: '6px 7px 3px 4px',
}));

function Square({ active, number, letter }) {
  const [isActive] = useState(active)

  return (
    <div>
      <OneSquare active={isActive} >
        <Number>{number}</Number>
        <Letter>{letter}</Letter>
      </OneSquare>
    </div>
  )
}

export default Square;

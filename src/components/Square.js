import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

const OneSquare = styled.div(( props ) => ({
  width: '35px',
  height: '35px',
  border: '1px solid black',
  margin: '100px',
  background: props.active ? 'white' : 'black',
  display: 'flex'
}));

const Number = styled.p((props) => ({
  fontSize: '10px',
  margin: '3px auto auto 3px',
  width: '5px',
  padding: '0'
}));

const Letter = styled.p((props) => ({
  fontSize: '25px',
  margin: '3px 7px 3px 4px',
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

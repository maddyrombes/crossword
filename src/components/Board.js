import React from 'react';
import styled from '@emotion/styled';
import Square from './Square';
import { puzzle1 } from '../data.js';

const PlayingBoard = styled.div((props) => ({
  border: '5px solid black',
  display: 'flex',
  flexWrap: 'wrap',
  width: '555px',
  margin: '20px'
}));

function Board() {
  return (
    <PlayingBoard>
      {puzzle1.grid.map(sq => (
        <Square 
          active={sq ? true : false}
          letter={sq}
        />
      ))}
    </PlayingBoard>
  )
}

export default Board;

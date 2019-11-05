import React from 'react';
import styled from '@emotion/styled';
import { puzzle1 } from '../data.js';

const CluesContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: '12px'
}));

const TypeContainer = styled.div(() => ({ 
  width: '200px',
  overflowY: 'scroll',
  height: '600px',
}));

function Clues() {
  return (
    <CluesContainer>
      <TypeContainer>
        <h3>Across</h3>
        {puzzle1.clues.across.map(clue => (
          <p>{clue.clue}</p>
        ))}
      </TypeContainer>
      <TypeContainer>
        <h3>Down</h3>
        {puzzle1.clues.down.map(clue => (
          <p>{clue.clue}</p>
        ))}
      </TypeContainer>
    </CluesContainer>
  )
}

export default Clues
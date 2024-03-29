import React from 'react';
import './App.css';
import Board from './components/Board.js';
import Clues from './components/Clues.js';
import styled from '@emotion/styled';

const MainHome = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

const H1 = styled.h1(() => ({
  fontSize: '30px',
  textAlign: 'center',
  margin: '30px'
}))

const GameDiv = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-evenly'
}));

function App() {
  return (
    <MainHome>
      <H1>Maddy's Crossword Puzzle App</H1>
      <GameDiv>
        <Board />
        <Clues />
      </GameDiv>
    </MainHome>
  );
}

export default App;

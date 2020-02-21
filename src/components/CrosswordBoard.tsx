import React, { FC } from 'react';

import CrosswordSquare from './CrosswordSquare';
import getGrid from '../utils/getGrid';
import CrosswordBoardRow from './CrosswordBoardRow';

import MockData from '../mock-data/20200220.json';

type CrosswordBoardProps = {
  numRows: number;
  numCols: number;
};

const CrosswordBoard: FC<CrosswordBoardProps> = ({ numRows, numCols }) => {
  const grid = getGrid(MockData);
  console.log(grid);

  const crossword = grid.map(row => <CrosswordBoardRow row={row} />);

  return (
    <>
      Hi this is a board of size ({numRows}, {numCols})
      <div className='crossword-grid-container'>{crossword}</div>
    </>
  );
};

export default CrosswordBoard;

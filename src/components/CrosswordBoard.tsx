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

  const crossword = grid.map(row => <CrosswordBoardRow row={row} />);

  return (
    <>
      <br />
      Type in any square to fill it with a letter. I recommend filling out the
      disabled squares of the crossword with a '#' or any other special
      character
      <br />
      <br />
      <br />
      <div className='crossword-grid-container'>{crossword}</div>
    </>
  );
};

export default CrosswordBoard;

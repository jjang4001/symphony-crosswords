import React, { FC } from 'react';

import CrosswordSquare from './CrosswordSquare';
import getGrid from '../utils/getGrid';

import MockData from '../mock-data/20200220.json';

type CrosswordBoardProps = {
  numRows: number;
  numCols: number;
};

const CrosswordBoard: FC<CrosswordBoardProps> = ({ numRows, numCols }) => {
  const grid = getGrid(MockData);
  console.log(grid);

  return (
    <>
      Hi this is a board of size ({numRows}, {numCols})
      <div className='crossword-grid-container'>
        <div className='crossword-board-row'>
          <div className='crossword-square'>b</div>
          <div className='crossword-square'>b</div>
          <div className='crossword-square'>b</div>
        </div>
        <div className='crossword-board-row'>
          <CrosswordSquare disabled={true} letter={'a'} />
          <CrosswordSquare disabled={true} letter={'a'} />
          <CrosswordSquare disabled={true} letter={'a'} />
        </div>
        <div className='crossword-board-row'>
          <CrosswordSquare disabled={true} letter={'a'} />
          <CrosswordSquare disabled={true} letter={'a'} />
          <CrosswordSquare disabled={true} letter={'a'} />
        </div>
      </div>
    </>
  );
};

export default CrosswordBoard;

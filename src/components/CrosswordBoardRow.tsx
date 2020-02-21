import React, { FC } from 'react';

import CrosswordSquare, { CrosswordSquareProps } from './CrosswordSquare';

type CrosswordBoardRowProps = {
  row: CrosswordSquareProps[];
};

const CrosswordBoardRow: FC<CrosswordBoardRowProps> = ({ row }) => {
  const content = row.map(square => (
    <CrosswordSquare disabled={square.disabled} letter={square.letter} />
  ));
  return <div className='crossword-board-row'>{content}</div>;
};

export default CrosswordBoardRow;

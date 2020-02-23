import React, { FC } from 'react';

import CrosswordSquare, { CrosswordSquareProps } from './CrosswordSquare';
import { Position } from '../models';

type CrosswordBoardRowProps = {
  row: CrosswordSquareProps[];
  selectedPosition: Position;
  selectedCol: number;
  rowIndex: number;
  setSelectedRow?: (idx: number) => void;
  setSelectedCol?: (idx: number) => void;
};

const CrosswordBoardRow: FC<CrosswordBoardRowProps> = ({
  row,
  selectedPosition,
  selectedCol,
  rowIndex,
  setSelectedRow,
  setSelectedCol
}) => {
  const content = row.map((square, colIdx) => (
    <CrosswordSquare
      key={colIdx}
      disabled={square.disabled}
      letter={square.letter}
      rowIndex={rowIndex}
      colIndex={colIdx}
      selectedPosition={selectedPosition}
      setSelectedRow={setSelectedRow}
      setSelectedCol={setSelectedCol}
      numberLabel={square.numberLabel}
    />
  ));
  return <div className='crossword-board-row'>{content}</div>;
};

export default CrosswordBoardRow;

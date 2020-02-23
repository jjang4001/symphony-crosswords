import React, { FC, useState, useCallback } from 'react';

import CrosswordSquare from './CrosswordSquare';
import getGrid from '../utils/getGrid';
import CrosswordBoardRow from './CrosswordBoardRow';
import { Position } from '../models';

import MockData from '../mock-data/20200220.json';

type CrosswordBoardProps = {
  numRows: number;
  numCols: number;
};

const KEY_LEFT_CODE = 37;
const KEY_UP_CODE = 38;
const KEY_RIGHT_CODE = 39;
const KEY_DOWN_CODE = 40;

function getNextPosition(currentPosition: Position, keyCode: number): Position {
  let { row: nextRow, col: nextCol } = currentPosition;

  if (keyCode === KEY_LEFT_CODE) {
    nextCol = Math.max(nextCol - 1, 0);
  } else if (keyCode === KEY_RIGHT_CODE) {
    // TODO: remove hard coded 14
    nextCol = Math.min(nextCol + 1, 14);
  } else if (keyCode === KEY_UP_CODE) {
    nextRow = Math.max(nextRow - 1, 0);
  } else if (keyCode === KEY_DOWN_CODE) {
    nextRow = Math.min(nextRow + 1, 14);
  }

  return {
    row: nextRow,
    col: nextCol
  };
}

const CrosswordBoard: FC<CrosswordBoardProps> = ({ numRows, numCols }) => {
  const grid = getGrid(MockData);
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);

  const crossword = grid.map((row, idx) => (
    <CrosswordBoardRow
      row={row}
      selectedPosition={{ row: selectedRow, col: selectedCol }}
      selectedCol={selectedCol}
      rowIndex={idx}
      key={idx}
      setSelectedCol={setSelectedCol}
      setSelectedRow={setSelectedRow}
    />
  ));

  const handleKeyDown = useCallback(
    (evt: React.KeyboardEvent) => {
      const nextPosition = getNextPosition(
        { row: selectedRow, col: selectedCol },
        evt.keyCode
      );
      setSelectedRow(nextPosition.row);
      setSelectedCol(nextPosition.col);
    },
    [selectedRow, setSelectedRow, selectedCol, setSelectedCol]
  );

  return (
    <>
      <br />
      Type in any square to fill it with a letter. I recommend filling out the
      disabled squares of the crossword with a '#' or any other special
      character.
      <br />
      <br />
      Also, sorry that backspacing on the squares is weird
      <br />
      <br />
      <br />
      <div className='crossword-grid-container' onKeyDown={handleKeyDown}>
        {crossword}
      </div>
    </>
  );
};

export default CrosswordBoard;

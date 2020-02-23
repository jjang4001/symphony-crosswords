import React, { FC, useState, useCallback, useRef } from 'react';

import { Position } from '../models';

export type CrosswordSquareProps = {
  disabled: boolean;
  letter: string;
  numberLabel?: number;
  rowIndex?: number;
  colIndex?: number;
  selectedPosition?: Position;
  setSelectedRow?: (idx: number) => void;
  setSelectedCol?: (idx: number) => void;
};

const CrosswordSquare: FC<CrosswordSquareProps> = ({
  disabled,
  letter,
  numberLabel,
  rowIndex,
  colIndex,
  selectedPosition,
  setSelectedRow,
  setSelectedCol
}) => {
  const [character, setCharacter] = useState(disabled ? '#' : '');

  const inputElement = useRef<HTMLInputElement>(null);

  if (
    rowIndex === selectedPosition?.row &&
    colIndex === selectedPosition?.col
  ) {
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }

  const handleChange = useCallback(
    (evt: React.FormEvent<HTMLInputElement>) => {
      setCharacter(evt.currentTarget.value);
    },
    [setCharacter]
  );

  // TODO: fix this up
  const moveCursorToEnd = useCallback(
    (evt: React.FormEvent<HTMLInputElement>) => {
      const tempValue = evt.currentTarget.value;
      evt.currentTarget.value = '';
      evt.currentTarget.value = tempValue;
    },
    []
  );

  const handleClick = () => {
    // TODO: Make prop types more robust
    if (setSelectedRow && setSelectedCol && rowIndex && colIndex) {
      setSelectedRow(rowIndex);
      setSelectedCol(colIndex);
    }
  };

  return (
    <div className='float-container'>
      {/* <label htmlFor='square'>l</label> */}
      <input
        id='square'
        type='text'
        className='crossword-square'
        maxLength={1}
        value={character}
        onChange={handleChange}
        ref={inputElement}
        disabled={disabled}
        onFocus={moveCursorToEnd}
        onClick={handleClick}
        placeholder={numberLabel ? String(numberLabel) : ''}
      />
    </div>
  );
};

export default CrosswordSquare;

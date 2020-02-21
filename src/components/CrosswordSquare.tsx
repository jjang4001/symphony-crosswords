import React, { FC } from 'react';

export type CrosswordSquareProps = {
  disabled: boolean;
  letter: string;
  numberLabel?: number;
};

const CrosswordSquare: FC<CrosswordSquareProps> = ({
  disabled,
  letter,
  numberLabel
}) => {
  console.log(disabled, letter, numberLabel);
  return <div className='crossword-square'>{letter}</div>;
};

export default CrosswordSquare;

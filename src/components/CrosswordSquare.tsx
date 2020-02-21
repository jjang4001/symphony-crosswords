import React, { FC } from 'react';

type CrosswordSquareProps = {
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
  return <div>|{letter}|</div>;
};

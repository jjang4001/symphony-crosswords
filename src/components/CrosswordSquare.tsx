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
  const content = disabled ? '#' : '';
  return (
    <input type='text' className='crossword-square' maxLength={1} />
    // TODO: use actual letters from json
    // <div className='crossword-square'>
    //   {content}
    // </div>
  );
};

export default CrosswordSquare;

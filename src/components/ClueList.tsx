import React, { FC } from 'react';
import { IClue } from '../models';

type ClueListProps = {
  clues: IClue[];
};

const ClueList: FC<ClueListProps> = ({ clues }) => {
  // return <div>Across</div>;
  const list = clues.map(clue => {
    return (
      <span>
        {clue.number}. {clue.description}
        <br />
      </span>
    );
  });
  return <ul>{list}</ul>;
};

export default ClueList;

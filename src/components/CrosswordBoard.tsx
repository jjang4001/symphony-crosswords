import React, { FC } from 'react';

import { ICrossword } from '../models';

import MockData from '../mock-data/20200220.json';

type CrosswordBoardProps = {
  numRows: number;
  numCols: number;
};

const CrosswordBoard: FC<CrosswordBoardProps> = ({ numRows, numCols }) => {
  console.log(MockData);
  const a: ICrossword = MockData;
  return (
    <div>
      Hi this is the board of size ({numRows}, {numCols})
    </div>
  );
};

export default CrosswordBoard;

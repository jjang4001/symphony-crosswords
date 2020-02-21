export enum Direction {
  ACROSS = 'ACROSS',
  DOWN = 'DOWN'
}

// typ;

export interface IClue {
  number: number;
  description: string;
  startRow: number;
  startCol: number;
  direction: string;
  length: number;
  answer?: string;
}

export interface ICrossword {
  numRows: number;
  numCols: number;
  clues: IClue[];
}

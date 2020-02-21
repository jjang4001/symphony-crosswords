import { ICrossword, IClue, Direction } from '../models';
import { CrosswordSquareProps } from '../components/CrosswordSquare';

function getGrid(crossword: ICrossword): CrosswordSquareProps[][] {
  const { numRows, numCols, clues } = crossword;
  const defaultSquareState: CrosswordSquareProps = {
    disabled: true,
    letter: ''
  };

  const emptyRow = Array.from({ length: numCols }, () =>
    Object.assign({}, defaultSquareState)
  );
  let grid = Array.from({ length: numRows }, () => emptyRow.slice(0));

  clues.forEach((clue, idx) => {
    const clueSquares = idx < 3 ? getClueSquares(clue) : [];
    grid = fillGridBlanks(grid, clueSquares);
  });

  return grid;
}

const directionToDisplacement = {
  [Direction.ACROSS]: [0, 1],
  [Direction.DOWN]: [1, 0]
};

function getClueSquares(clue: IClue): Position[] {
  let count = clue.length;
  const startPosition: Position = {
    row: clue.startRow,
    col: clue.startCol
  };

  const direction = clue.direction as Direction;

  const clueSquares = [startPosition];
  let currPosition = startPosition;

  const displacement = directionToDisplacement[direction];

  while (count > clueSquares.length) {
    const nextPositionRow = currPosition.row + displacement[0];
    const nextPositionCol = currPosition.col + displacement[1];
    const nextPosition = {
      row: nextPositionRow,
      col: nextPositionCol
    };
    currPosition = nextPosition;

    clueSquares.push(nextPosition);
  }
  return clueSquares;
}

type Position = {
  row: number;
  col: number;
};

function fillGridBlanks(
  grid: CrosswordSquareProps[][],
  clueSquarePositions: Position[]
): CrosswordSquareProps[][] {
  clueSquarePositions.forEach(position => {
    const { row, col } = position;
    grid[row][col].disabled = false;
  });

  return grid;
}

export default getGrid;

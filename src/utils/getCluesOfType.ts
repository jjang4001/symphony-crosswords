import { ICrossword, IClue, Direction } from '../models';

function getCluesOfType(crossword: ICrossword, direction: Direction): IClue[] {
  const clues = crossword.clues;
  return clues.filter(clue => clue.direction === direction);
}

export default getCluesOfType;

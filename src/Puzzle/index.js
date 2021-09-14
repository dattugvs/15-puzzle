import { Directions, PuzzleConstants } from "../constants/constants";

function shuffle(array) 
{
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

function getEmptyIndex(a) 
{
    for(let i=0; i<15; i++)
    {
        if(a[i] === PuzzleConstants.EmptyTile)
        {
            return i;
        }
    }
    return -1; // error case
}

function getNeighbour(index, direction)
{
    switch(direction)
    {
        case Directions.UP     : return ([12, 13, 14, 15]).indexOf(index) === -1 ? index+4 : -1;
        case Directions.DOWN   : return ([0, 1, 2, 3]).indexOf(index) === -1 ? index-4 : -1;
        case Directions.LEFT   : return ([3, 7, 11, 15]).indexOf(index) === -1 ? index+1 : -1;
        case Directions.RIGHT  : return ([0,4,8,12]).indexOf(index) === -1 ? index-1 : -1;
        default     : return -1; // wrong direction - error case
    }
}

function checkWin(a) 
{
    for(let i=0; i<15; i++)
    {
        if(a[i] !== i+1)
        {
            return false;
        }
    }
    return true;
}

export const Puzzle = {
    shuffle: shuffle,
    getEmptyIndex: getEmptyIndex,
    getNeighbour: getNeighbour,
    checkWin: checkWin
}
function Board(squares) {
  this.squares = squares;
}

Board.prototype.buildBoard = function() {

}
var model = {
  board: ['', '', '', '', '', '', '', '', '', ''],
  score: { x: 0, o: 0  }
};

function Tile() {
  this.status = '';
}

//Set's the inner value of a tile piece
Tile.prototype.setStatus = function(val) {
  this.status = val;
}

Tile.prototype.isOccupied = function() {
  return this.status ? true : false;
}
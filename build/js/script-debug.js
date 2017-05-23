'use strict';

function Board(squares) {
  this.squares = squares;
  this.grid = [];
}

Board.prototype.fillBoard = function () {
  for (var i = 0; i < this.squares; i++) {
    this.grid.push(new Tile());
  }
};

Board.prototype.buildBoard = function (boardClass) {
  var that = this;
  var boardElem = document.getElementsByClassName(boardClass)[0];

  var _loop = function _loop(i) {
    tileElem = document.createElement('div');

    tileElem.className = 'tile';
    tileElem.addEventListener('click', function () {
      console.log(that.grid[i]);
    });
    boardElem.appendChild(tileElem);
  };

  for (var i = 0; i < this.squares; i++) {
    var tileElem;

    _loop(i);
  }
  console.log(boardElem);
};

var x = new Board(9);
x.fillBoard();
x.buildBoard("board");
'use strict';

var model = {
  board: ['', '', '', '', '', '', '', '', ''],
  score: { x: 0, o: 0 }
};
"use strict";
'use strict';

function Tile() {
  this.status = '';
}

//Set's the inner value of a tile piece
Tile.prototype.setStatus = function (val) {
  this.status = val;
};

Tile.prototype.isOccupied = function () {
  return this.status ? true : false;
};
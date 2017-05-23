'use strict';

function Board(squares) {
  this.squares = squares;
  this.grid = [];
  this.turns = 0;
}

Board.prototype.fillBoard = function () {
  for (var i = 0; i < this.squares; i++) {
    this.grid.push(new Tile());
  }
};

Board.prototype.increaseTurn = function () {
  this.turns++;
};

Board.prototype.buildBoard = function (boardClass) {
  var that = this;
  var boardElem = document.getElementsByClassName(boardClass)[0];

  var _loop = function _loop(i) {
    tileElem = document.createElement('div');

    tileElem.className = 'tile';

    //Place tile depending on turn order
    tileElem.addEventListener('click', function () {
      var grid = that.grid[i];
      if (that.turns % 2 === 0) {
        grid.setStatus("X");
      } else {
        grid.setStatus("O");
      }
      console.log(grid);
      that.increaseTurn();
    });

    boardElem.appendChild(tileElem);
  };

  for (var i = 0; i < this.squares; i++) {
    var tileElem;

    _loop(i);
  }
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
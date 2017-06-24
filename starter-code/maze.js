var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft = function() {
  switch (this._miner.dir) {
    case 0:
      this._miner.dir = 3;
      break;
    case 1:
      this._miner.dir = 0;
      break;
    case 2:
      this._miner.dir = 1;
      break;
    case 3:
      this._miner.dir = 2;
      break;

  }

};

Maze.prototype.turnRight = function() {
  switch (this._miner.dir) {
    case 0:
      this._miner.dir = 1;
      break;
    case 1:
      this._miner.dir = 2;
      break;
    case 2:
      this._miner.dir = 3;
      break;
    case 3:
      this._miner.dir = 0;
      break;
  }
};

Maze.prototype.isPathForward = function() {
  var response;
  switch (this._miner.dir) {
    case 0:
      response =  ((this._miner.row - 1) >= 0 && this._maze[this._miner.row - 1][this._miner.col]) ? true : false;
      break;
    case 1:
      response =  ((this._miner.col + 1 < this._maze[0].length) && this._maze[this._miner.row][this._miner.col + 1]) ? true : false;
      break;
    case 2:
      response = ((this._miner.row + 1 < this._maze.length) && this._maze[this._miner.row + 1][this._miner.col] ) ? true : false;
      break;
    case 3:
      response = ((this._miner.col - 1 >= 0) && this._maze[this._miner.row][this._miner.col - 1] ) ? true : false;
      break;
  }
  return response;
};

Maze.prototype.isPathLeft = function() {
  var response;
  switch (this._miner.dir) {
    case 0:
      response =  ((this._miner.col - 1 >= 0) && this._maze[this._miner.row][this._miner.col - 1]) ? true : false;
      break;
    case 1:
      response =  ((this._miner.row - 1 >= 0 ) && this._maze[this._miner.row - 1][this._miner.col]) ? true : false;
      break;
    case 2:
      response = ((this._miner.col + 1 < this._maze[0].length) && this._maze[this._miner.row][this._miner.col + 1] ) ? true : false;
      break;
    case 3:
      response = ((this._miner.row + 1 < this._maze.length) && this._maze[this._miner.row + 1][this._miner.col] ) ? true : false;
      break;
  }
  return response;
};

Maze.prototype.isPathRight = function() {
  var response;
  switch (this._miner.dir) {
    case 0:
      response =  ((this._miner.col + 1 < this._maze[0].length) && this._maze[this._miner.row][this._miner.col + 1]) ? true : false;
      break;
    case 1:
      response =  ((this._miner.row + 1 < this._maze.length) && this._maze[this._miner.row + 1][this._miner.col]) ? true : false;
      break;
    case 2:
      response = ((this._miner.col - 1 >= 0) && this._maze[this._miner.row][this._miner.col - 1] ) ? true : false;
      break;
    case 3:
      response = ((this._miner.row - 1 >= 0 ) && this._maze[this._miner.row - 1][this._miner.col] ) ? true : false;
      break;
  }
  return response;
};

Maze.prototype.moveForward = function() {
  var response;
  switch (this._miner.dir) {
    case 0:
      if(this.isPathForward()){
        this._miner.row -= 1;
        response = true;
      } else {
        response = false;
      }
      return response;
    case 1:
      if(this.isPathForward()){
        this._miner.col += 1;
        response = true;
      } else {
        response = false;
      }
      return response;
    case 2:
      if(this.isPathForward()){
        this._miner.row += 1;
        response = true;
      } else {
        response = false;
      }
      return response;
    case 3:
      if(this.isPathForward()){
        this._miner.col -= 1;
        response = true;
      } else {
        response = false;
      }
      return response;
  }
};

Maze.prototype.notDone = function() {
  var response;
  if(this._miner.row === this._exit.row && this._miner.col === this._exit.col){
    response = true;
  } else {
    response = false;
  }
  return response;
};

module.exports = Maze;

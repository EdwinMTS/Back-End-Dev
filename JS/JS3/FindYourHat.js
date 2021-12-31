// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  constructor(field) {
      this._field = field;
  }

  print () {
      for (let i = 0; i < this._field.length; i++) {
          let fieldRow = '';
          for (let j = 0; j < this._field[i].length; j++) {
              fieldRow = fieldRow + this._field[i][j];
          }
          console.log(fieldRow);
      }
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print()
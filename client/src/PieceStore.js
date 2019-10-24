import { observable, action, decorate, computed } from 'mobx';

export class Piece {
  text = '';
  constructor(text) {
    this.id = Date.now();
    this.text = text;
  }
}

class PieceStore {
  pieces = [];
  selectedPieces = [];
  emptyPieceFieldError = '';
  piecesToSelectFrom = [];
  selectedOption;
  selectionDone;

  add = piece => {
    console.log(this.pieces);
    console.log(piece);
    const isSame = this.pieces.some(pieceOnList => pieceOnList.text === piece);

    if (!piece) {
      this.emptyPieceFieldError = 'Please enter a piece name';
      console.log(this.emptyPieceFieldError);

    } else if (isSame){
      this.emptyPieceFieldError = 'You already have this piece in your piece list';
      console.log(this.emptyPieceFieldError);
    }
    else {
      this.pieces.push(new Piece(piece));
      this.emptyPieceFieldError = undefined;
    }
  };

  delete = p => {
    const itemToRemove = this.pieces.find(item => item.id === p.id);
    this.pieces.remove(itemToRemove);
  };

  

  select = () => {
    if(this.piecesToSelectFrom.length === 0 && this.selectionDone !== true){
      this.piecesToSelectFrom = [...this.pieces]
    } 
    
    const randomNum = Math.floor(Math.random() * this.piecesToSelectFrom.length);
    this.selectedOption = this.piecesToSelectFrom[randomNum];
    console.log(this.piecesToSelectFrom);
    console.log(this.selectedOption);
    this.piecesToSelectFrom = this.piecesToSelectFrom.filter(p => p !== this.selectedOption);
    if(this.piecesToSelectFrom.length === 0){
      this.selectionDone = true;
    }
  }

}
decorate(PieceStore, {
  pieces: observable,
  // selectedPieces: observable,
  add: action,
  selectedOption: observable,
  delete: action,
  select: action,
  emptyPieceFieldError: observable,
  piecesToSelectFrom: observable,
  selectionDone:observable
});
decorate(Piece, {
  text: observable,
});

export default new PieceStore();

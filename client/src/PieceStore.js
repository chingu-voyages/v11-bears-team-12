import { observable, action, decorate, computed } from "mobx";

export class Piece {
  text = "";
  constructor(text) {
    this.id = Date.now();
    this.text = text;
 
  }
}

class PieceStore {
  pieces = [];
  selectedPieces = [];
  emptyPieceFieldError = "";

  add = piece => {
    if (!piece){
       console.log(this.emptyPieceFieldError);
       this.emptyPieceFieldError = "Please enter a piece name";
    } else{
        this.pieces.push(new Piece(piece));
        this.emptyPieceFieldError = undefined;
    }
  };
 


delete = p => {
    const itemToRemove = this.pieces.find(item => item.id === p.id)
    this.pieces.remove(itemToRemove);
 
  
}

  
  select = () => {
    this.selectedPieces.push(this.selectedOption);
  }
 
  get selectedOption(){
    const randomNum = Math.floor(Math.random() * this.pieces.length);
    return this.pieces[randomNum];
  }
 
}
decorate(PieceStore, {
  pieces: observable,
  selectedPieces:observable,
  add: action,
  selectedOption: computed,
  delete: action,
  select: action,
  emptyPieceFieldError: observable
});
decorate(Piece, {
  text: observable,

});

export default new PieceStore();


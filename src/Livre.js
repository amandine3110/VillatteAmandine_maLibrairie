// un livre
export default class Livre {
    constructor(id, titre, qtestock, prix) {
      this._titre = titre;
      this._qtestock = qtestock;
      this._prix = prix;
      this._id = id;
    }
    get titre() {
      return this._titre;
    }
    get id() {
      return this._id;
    }
    get qtestock() {
      return this._qtestock;
    }
    get prix() {
        return this._prix;
    }
  
    // augmenter la quantité d'une unité
    increase() {
      this._qtestock = this._qtestock+1;
    }

    // diminuer la quantité d'une unité
    decrease() {
      if (this._qtestock==0){
        this._qtestock=this.qtestock;
      }else{
        this._qtestock = this._qtestock-1;
      }
    }

    
  }
  
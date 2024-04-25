export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

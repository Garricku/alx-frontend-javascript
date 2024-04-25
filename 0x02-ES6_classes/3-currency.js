export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      if (typeof name === 'string') {
        this._code = code;
        this._name = name;
      }
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }
}

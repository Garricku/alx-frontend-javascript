export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      if (typeof code === 'string') {
        this._name = name;
        this._code = code;
      }
    }
  }

  toString() {
    return this._code;
  }
}

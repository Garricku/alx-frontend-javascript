export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      if (typeof location === 'string') {
        this._size = size;
        this._location = location;
      }
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

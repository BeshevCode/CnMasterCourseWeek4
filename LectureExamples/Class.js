class Cars {
  constructor(reg, arrival, departure) {
      this._reg = reg;
      this._arrival = arrival;
      this._departure = departure;
      this._costPerHour = 2;
  }

  get reg() {
    return this._reg;
  }

  get arrival() {
    return this._arrival;
  }

  get departure() {
    return this._departure;
  }

  costOfParking() {
      return this._departure - this._arrival * this._costPerHour;
  }
}
 const Car_1 = new Cars(reg: "MF10 RWQ", arrival: 3, departure: 8)
 console.log(Cars)
class Cars {
  constructor(reg, arrival) {
      this._reg = reg;
      this._arrival = arrival;
      this._departure;
      this._totalCost;
      this._amountPaid = 0;
      this._costPerHour = 1.5;
      this._hasPaid = false;
  }
  departure(time) {
      this._departure = time;
      this._totalCost = (this._departure - this._arrival) * this._costPerHour;
  }
  payParking(payment) {
      if (this._amountPaid < this._totalCost) {
          this._amountPaid = this._amountPaid + payment;
          if (this._amountPaid >= this._totalCost) {
              this._hasPaid = true;
          }
      }
  }
  exit() {
      if (this._hasPaid) {
          console.log("Thanks for visiting");
      }
  }
}

const AA1AAA = new Cars("AA1AAA", 5);
console.log(AA1AAA);
AA1AAA.departure(10);
console.log(AA1AAA);
AA1AAA.payParking(2);
AA1AAA.payParking(2);
AA1AAA.payParking(2);
console.log(AA1AAA);
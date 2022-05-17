class Cars {
  constructor(reg, arrival) {
      this._reg = reg;
      this._arrival = arrival;
      this._departure;
      this._totalCost;
      this._amtPaid = 0;
      this._costPerHour = 1.5;
      this._hasPaid = false;
      this._parkingTime = 0;
  }
  departure(time) { //Gives you the time spent in the parking
      this._departure = time;
      this._totalCost = (this._departure - this._arrival) * this._costPerHour;
      this._parkingTime = this._departure - this._arrival;
  }
  payParking(payment) { //Total amount to be paid for parking
      if (this._amtPaid < this._totalCost) {
          this._amtPaid += payment;
          if (this._amtPaid >= this._totalCost) {
              this._hasPaid = true; // Checks if the customer has paid in full
          }
      }
  }
  exit() {
      if (this._hasPaid) {
          console.log("Thank you for visiting!");
      }
  }
}

const MF08BUF = new Cars("MF08BUF", 5);

class Staff extends Cars {
    constructor(reg, arrival) {
        super(reg, arrival);
        this.staffNumber = 333;
        this._wallet = 100;
    }
    discount(staffNumber) {
        if (staffNumber == 333) {
            this._totalCost = this._totalCost / 2;
        }
    }
    payement() {
        this._wallet = this._wallet - this._totalCost;
    }
}
const nikolay = new Staff("KM20 ETW", 6);
console.log(nikolay);

nikolay.departure(9);
nikolay.discount(333);
nikolay.payement();
console.log(nikolay);
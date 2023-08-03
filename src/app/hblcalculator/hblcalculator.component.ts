import { Component } from '@angular/core';

@Component({
  selector: 'app-hblcalculator',
  templateUrl: './hblcalculator.component.html',
  styleUrls: ['./hblcalculator.component.css']
})
export class HblcalculatorComponent {
  vprice = 0
  vrepay = 0
  vdeposite = 0


  getPrice(p: any) {
    this.vprice = p
  }

  getRepay(r: any) {
    this.vrepay = r
  }
  getDep(d: any) {
    this.vdeposite = d
  }
  FM = 0
  securitydep = 0
  monthlyincom = 0
  n = 0
  rate = 0
  calculator() {

    this.securitydep = this.vprice * (this.vdeposite / 100);
    this.FM = this.vprice - this.securitydep;
    this.n = this.vrepay * 12
    this.rate = ((14 + (2 * this.vrepay)) / 100) / 12
    this.monthlyincom = (this.FM * this.rate * Math.pow(1 + this.rate, this.n)) / (Math.pow(1 + this.rate, this.n) - 1)

    this.monthlyincom = Math.floor(this.monthlyincom)


  }

}

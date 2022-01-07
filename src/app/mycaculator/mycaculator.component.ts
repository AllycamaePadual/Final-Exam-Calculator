import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycaculator',
  templateUrl: './mycaculator.component.html',
  styleUrls: ['./mycaculator.component.css']
})
export class MycaculatorComponent implements OnInit {
   title = "My Calculator";
  constructor() { }

  ngOnInit(): void {
  }
  data = '';
  display: string = '';

  calculate() {
    this.cal();
    this.data = this.display;
    if (this.data == "0") this.data = "";
  }
getLastOperand() {
    let  row : number;
    console.log(this.data)
    row = this.data.toString().lastIndexOf("+")
    if (this.data.toString().lastIndexOf("-") > row )  row  = this.data.lastIndexOf("-")
    if (this.data.toString().lastIndexOf("*") > row )  row  = this.data.lastIndexOf("*")
    if (this.data.toString().lastIndexOf("/") >  row )  row  = this.data.lastIndexOf("/")
    console.log('Last ' + this.data.substr( row  + 1))
    return this.data.substr( row  + 1)
  }
  Int(num: string) {

  
    if (num == ".") {
      if (this.data != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }

   
    if (num == "0") {
      if (this.data == "") {
        return;
      }
      const enterKey = this.data[this.data.length - 1];
      if (enterKey === '/' || enterKey === '*' || enterKey === '-' ||enterKey === '+') {
        return;
      }
    }

    this.data = this.data + num
    this.cal();
  }


  myoperator(Operator: string) {

   
    const lastKey = this.data[this.data.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return;
    }

    this.data = this.data + Operator
    this.cal();
  }


  

  allClear() {
    this.display= '';
    this.data = '';
  }
  calclear() {
    if (this.data != "") {
      this.data = this.data.substr(0, this.data.length - 1)
    }
  }
  cal() {
    let formula = this.data;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }

    console.log("Formula " + formula);
    this.display = eval(formula);
  }

  

}

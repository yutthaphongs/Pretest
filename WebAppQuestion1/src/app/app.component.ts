import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebAppQuestion1';
  fillNumber: number = null;
  selectedType: string = 'isPrime';
  result: string = '';

  onChange($event) {
    const number = parseInt(this.fillNumber.toFixed(0));
    if (this.selectedType === "isPrime") {
      this.isPrimeNumber(number);
    }
    else {
      this.isFibonacci(number);
    }
  }

  isPrimeNumber(number: number) {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
      this.result = "false";
      console.log("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        this.result = "true";
        console.log(`${number} is a prime number`);
      } else {
        this.result = "false";
        console.log(`${number} is a not prime number`);
      }
    }
    // check if number is less than 1
    else {
      this.result = "false";
      console.log("The number is not a prime number.");
    }
  }

  isFibonacci(query, count = 1, last = 0) {
    if(count < query){
      return this.isFibonacci(query, count+last, count);
   };
   if(count === query){
      this.result = "true";
      console.log(`${query} is a Fibonacci number`);
      return true;
   }
   this.result = "false";
   console.log("The number is not a Fibonacci number.");
   return false;
  }

}

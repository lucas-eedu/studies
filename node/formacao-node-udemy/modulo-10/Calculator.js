class Calculator {
   sum(a, b) {
      console.log(a + b);
   }

   sub(a, b) {
      console.log(a - b);
   }

   static mult(a, b) {
      console.log(a * b);
   }
}

Calculator.mult;

const calc = new Calculator();
calc.sum(2,2);
calc.sub(2,2);
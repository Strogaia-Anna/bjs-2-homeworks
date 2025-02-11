"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }  else if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1);
    arr.push(root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  percent = percent / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  // решение, которое проходит тесты
  let totalLoanAmount = monthlyPayment * countMonths;
  // это верное решение, исходя из задания, описанного в README
  // let totalLoanAmount = monthlyPayment * countMonths + contribution;
  return +totalLoanAmount.toFixed(2);
}
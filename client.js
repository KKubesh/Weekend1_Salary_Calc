/* jshint esversion: 6 */
$(document).ready(readyNow);

let totalCalc = 0;
let empArray = [];

function readyNow() {
  submitBtnClick();
}

function submitBtnClick() {
  // Simple click function to submitBtn
  $('#submitBtn').on('click', takeInput);
}

function takeInput() {
  // Receives the values and runs them through these functions
  appInput();
  calcInputs();
}

function appInput(){
  // Pushes the values into the table
  let first = $('#firstN').val();
  let last = $('#lastN').val();
  let id = $('#workID').val();
  let title = $('#empTitle').val();
  let salary = $('#annSal').val();
  $('table').append('<tr><td>'+first+'</td><td>'+last+'</td><td>'+id+'</td><td>'+title+'</td><td>'+salary+'</th><th id=invis><button id="delEmpBtn">Remove</button><th></tr>');// Pushes the values into the table
  newEmployee(first, last, id, title, salary); // function creates a new object of the inputs
  delEmpBtn(); // Adds property of function to the button just created
}

function calcInputs() {
  // Calculates the Input values to place in Total Monthly
  totalCalc += $('#annSal').val() / 12;
  totalFill();
}

function newEmployee(first, last, id, title, salary) {
  let worker = new Employee (first, last, id, title, salary);
  empArray.push(worker);
  console.log(worker);
}

class Employee {
  constructor( firstN, lastN, workID, empTitle, annSal ){
    this.first = firstN;
    this.last = lastN;
    this.id = workID;
    this.title = empTitle;
    this.salary = annSal;
  }
}

function delEmpBtn() {
  $('#delEmpBtn').on('click', delEmp);
}

function delEmp() {
  console.log($('#delEmpBtn').parent().parent());
}

function totalFill() {
  // Adjust Total Monthly cost
  $('#totalMonthly').empty();
  $('#totalMonthly').append(totalCalc.toFixed(2));
  valRedText();
}

function valRedText() {
  // Changes the class of the monthly value to change to red if the value exceeds 20,000 monthly
  if (totalCalc > 20000){
    $('#totalMonthly').css("color", "red");
  }
}

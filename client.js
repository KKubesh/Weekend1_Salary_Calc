/* jshint esversion: 6 */
$(document).ready(readyNow);

let totalCalc = 0;
let empArray = [];

function readyNow() {
  submitBtnClick();
  delEmpBtn();
}

function submitBtnClick() {
  // Simple click function to submitBtn
  $('#submitBtn').on('click', takeInput);
}

function takeInput() {
  // Receives the values and runs them through these functions
  let first = $('#firstN').val();
  let last = $('#lastN').val();
  let id = $('#workID').val();
  let title = $('#empTitle').val();
  let salary = $('#annSal').val();
  // Checks if all inputs are filled in with some value
  if (salary === '' || first === '' || last === '' || id === '' || title === '' ){
    return alert('Appears you have not filled out the form.');
    // Stops all actions because of inputs were empty
  }
  appInput();
  calcInputs();
  clearInputs();
}

function appInput(){
  // Pushes the values into the table
  let first = $('#firstN').val();
  let last = $('#lastN').val();
  let id = $('#workID').val();
  let title = $('#empTitle').val();
  let salary = $('#annSal').val();
  $('table').append('<tr><td>'+first+'</td><td>'+last+'</td><td>'+id+'</td><td>'+title+'</td><td>'+salary+'</td><th id=invis><button id="delEmpBtn">Remove</button></th></tr>');// Pushes the values into the table
  newEmployee(first, last, id, title, salary); // function creates a new class of the inputs
  delEmpBtn(); // Adds property of function to the button just created
}

function calcInputs() {
  // Calculates the Input values to place in Total Monthly
  totalCalc += $('#annSal').val() / 12;
  totalFill();
}

function clearInputs(){
  $('#firstN').val("");
  $('#lastN').val("");
  $('#workID').val("");
  $('#empTitle').val("");
  $('#annSal').val("");
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
  $('table').on('click', '#delEmpBtn', delEmp);
  // $('table').on('click', '#delEmpBtn', reCalc);
}

function delEmp() {
  $(this).parent().parent().remove();
}

// function reCalc(){
//   console.log(($(this).parent().prev()).data({innerText: "salary"}));
//   totalCalc -= $(this).parent().prev();
//   totalFill();
// }

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

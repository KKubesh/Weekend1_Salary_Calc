/* jshint esversion: 6 */
$(document).ready(readyNow);

let totalCalc = 0;

function readyNow() {
  submitBtnClick();
}

function submitBtnClick() {
  // Simple click function to submitBtn
  $('#submitBtn').on('click', takeInput);
}

function takeInput() {
  // Receives the values and runs them through these functions
  pushInput();
  calcInputs();
}

function pushInput(){
  // Pushes the values into the table
  let first = $('#firstN').val();
  let last = $('#lastN').val();
  let id = $('workID').val();
  let title = $('#empTitle').val();
  let salary = $('#annSal').val();
  $('thead').append('<tr><td>'+first+'</td><td>'+last+'</td><td>'+id+'</td><td>'+title+'</td><td>'+salary+'</th>');// Pushes the values into the table
}

function calcInputs() {
  // Calculates the Input values to place in Total Monthly
  totalCalc += $('#annSal').val() / 12;
  totalFill();
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

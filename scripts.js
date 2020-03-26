function interestCalc() {
    let annualInterest = document.getElementById("interest").value;
    let monthlyInterest = (annualInterest / 100) / 12; 
    return monthlyInterest;
}
/* 
The interestCalc function works out the monthly interest rate by converting the input into a decimal e.g. 3% into 0.03, which provides the yearly interest. Then it is divided by 12 to get the monthly interest.
*/

function termMonths() {
    let repaymentTerm = document.getElementById("term").value;
    let monthlyPay = repaymentTerm * 12;
    return monthlyPay;
}
//The termMonths function takes the years the mortgage is to be paid over and converts it into months to be used in the final calculation function

function calculation() {
    let mLoan = document.getElementById("loan").value;
    let answer = mLoan * (interestCalc()*(1 + interestCalc()) ** termMonths()) / ((1 + interestCalc()) ** termMonths() - 1);

    document.getElementById("output").innerHTML = "You will be paying £" + answer.toFixed(2) + "p per month";
}

function reset() {
    location.reload(true);
}
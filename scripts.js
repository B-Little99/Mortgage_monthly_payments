function interestCalc() {
    let annualInterest = document.getElementById("interest").value;
    let monthlyInterest = (annualInterest / 100) / 12; 
    return monthlyInterest;
}

function monthlyRepayCalc() {
    let repaymentTerm = document.getElementById("term").value;
    let monthlyPay = repaymentTerm * 12;
    return monthlyPay;
}

function calculation() {
    let mLoan = document.getElementById("loan").value;
    let answer = mLoan * (interestCalc()*(1 + interestCalc()) ** monthlyRepayCalc()) / ((1 + interestCalc()) ** monthlyRepayCalc() - 1);

    document.getElementById("output").innerHTML = answer.toFixed(2);
}
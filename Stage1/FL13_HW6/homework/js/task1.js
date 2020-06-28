const maxPercent=100;
const accuracy =2;
let a= parseFloat(prompt('Enter an amount',0));
let b= +prompt('Enter the percent of a tip',0);
if ( !isNaN(a) && !isNaN(b) && a>=0 && b>=0 && b<=maxPercent) {
    let c= Math.round(a*b)/maxPercent;
    let k=a+c;
    alert(`Check number: ${a}UAH
    Tip: ${b}%
    Tip amount: ${c}UAH
    Total sum to pay:  ${+k.toFixed(accuracy)}UAH`);    
} else {
    alert('Invalid input data');
}


function isBigger(x, y){
    if (x>y){
        return true;
    } 
    return false;
}

let x=5;
let y=8;

function getDifference (x, y){
    if (isBigger(x,y)){
       return x-y;
    }
    return y-x;
}
console.log(`Difference between ${x} and ${y} is ${getDifference (x, y)} `);
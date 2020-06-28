
function positiveSum(arrayNumbers){
    return arrayNumbers.reduce(
        function (sum, item){
        if (item>0){
            return sum+item;
        } 
        return sum;
    },0)
    
}
console.log(positiveSum([4,-1,0,10,-4,2]));
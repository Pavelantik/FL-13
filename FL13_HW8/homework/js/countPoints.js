
function countPoints(resultArray){
    let res = resultArray.reduce(function(sum, item){
        if (Number(item[0])>Number(item[2])){
            return sum+3;
        } else {
            if (Number(item[0])===Number(item[2])){
                return sum+1;
            }
        }
        return sum;
    }, 0);
    return res;
}
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) );

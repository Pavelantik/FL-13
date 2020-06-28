
function letterCount(str, subStr){
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();
    let i=0;
    let pos=0;
    do{
        pos = str.indexOf(subStr, pos);
        if (pos !==-1){
            i++;
            pos = pos +subStr.length;
        } else {
            return i;
        } 
    } while ( pos!== -1);    
}

console.log(letterCount('gGtrghtg', 'g'));
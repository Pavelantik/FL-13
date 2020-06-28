//task #1
function convert(...arrItems){
    let newArr =[];
    for (let i=0; i<arrItems.length;i++){
        if (typeof arrItems[i] === 'string'){            
            newArr.push(Number(arrItems[i]));
        } else {
            newArr.push(String(arrItems[i]));
        }
    }
    return newArr;
}

// task #2
function executeforEach(arr, callback){
    for (let i=0; i<arr.length;i++){
            callback(arr[i]);
    }
}

//task #3
function mapArray(arr, callback){
    let newArr = [];
    executeforEach(arr, (el) => newArr.push(callback(Number(el))));
    return newArr;
 } 

//task #4
function filterArray(arr, callback){
    let newArr = [];
    executeforEach(arr, function (el){
        if(callback(el)){
            newArr.push(el);
        }
    } );
    return newArr;
 } 

 //task #5
 function containsValue(arr, value){
     let isIncluded=false;
    executeforEach(arr, function(el){
        el === value ? isIncluded = true: false;
    });
    return isIncluded;
 }

 //task #6
 function flipOver(stringIn){
     let reverseString='';
     for (let i = stringIn.length-1;i >=0; i--){
        reverseString += stringIn[i];
     }
     return reverseString;
 }

 //task #7
 function makeListFromRange(range){
     let minRange = range[0];
     let maxRange = range[1];
     if (minRange === maxRange){
         return [maxRange];
     } else{
         if (minRange > maxRange){
            minRange = maxRange;
            maxRange= range[0];
         }
     }
     let resultArr = [];
     resultArr.push(minRange);
     for (let i=1; i<=maxRange-minRange;i++){
        resultArr.push(minRange+i);
     }
    return resultArr;
 }

 //task #8
function getArrayOfKeys(arrObj, keyValue){
    let result=[];
    executeforEach(arrObj, (el) => result.push(el[keyValue]) );
    return result;
}

//task #9
function substitute(arr){
    return mapArray(arr, function(el){
        const minRange = 10;
        const maxRange = 20;
        if(el>minRange && el<maxRange){
            return '*';
        } else {
            return el;
        }
    });
}

//task #10
function getPastDay (date, pastDays){
    let dateTimestamp = date.getTime();
    const millisecInDay = 86400000; 
    let pastDaysTimestamp = pastDays* millisecInDay;
    let pastDate = new Date(dateTimestamp-pastDaysTimestamp);
    return pastDate.getDate();
}

//task #11
function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    return year+'/'+month+'/'+day+' '+hour+':'+minute;
}
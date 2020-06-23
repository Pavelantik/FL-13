let ar= [1,5,-4,10,4,5,8,1,4];


//TASK 1
function maxElArr(arr){
    return Math.max(...arr);
}

//TASK 2
function copyArr(arr){
    let [...newArr]= arr;
    return newArr;
}
//console.log(ar);

//TASK 3

function addUniqueId(arg){
    let id = Symbol('id');
    return Object.assign({'id':id},arg);
}
//console.log (addUniqueId({name:'gghg'}));

//TASK 4
function regroupObject(arg){   
    let {
        name:firstName,
        details:{
            university,
            age,
            id
        }        
    } = arg;
    let newObj = {
        university,
        user:{
            user:{
                age,
                firstName,
                id
        }
    }
}
return newObj;
}

// let oldOb={
//     name:'bla',
//     details: {
//         id:'1',
//         age:12,
//         university:'UZHU'
//     }
// }
// console.log(regroupObject(oldOb));

//TASK 5
function findUniqueEls(arg){
    return Array.from(new Set(arg));
}
// console.log(ar);
// console.log(findUniqueEls(ar));

  //TASK 6
  function maskNumber (arg){
      let visibleDigits = arg.slice(-4);
      return visibleDigits.padStart(arg.length,'*');
  }
 //console.log(maskNumber('123456789'))

 //Task 7
function add(a, b= 'missing'){
    try{
    if(b==='missing'){
        let newStack = `Uncaught Error: Missing property
        at required (<anonymous>:86:16)
        at add (<anonymous>:105:1)
        at <anonymous>:8:1
        `;       
         throw newStack;      
         
    }
    return a+b;
    } catch (e) {
    console.error(e);
  }
}
//console.log(add(4));
//console.log(add(4,9));

//TASK 8
function sortedUsers(){
    let promise = new Promise(function(resolve, regect){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => resolve(data))           
    })
    .then((data)=>{
        console.log(data.map(item => item.name).sort());
    })
    .catch(e => console.error(`An error has occurred:
    ${e}`))
}
sortedUsers();

//TASK 9
async function  sortedAr2(){
    let resFetch = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await resFetch.json();
    console.log(data.map(item => item.name).sort());

}
sortedAr2();

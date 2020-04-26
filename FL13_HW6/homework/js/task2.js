const divide2 = 2;
let k=prompt('Enter a word');
if ( !k || !isNaN(k) && !Number(k) && !k.includes('0') ){
    alert('Invalid value');
} else{  
    if (k.length % divide2) {
        alert('"'+k[(k.length-1)/divide2] +'" is middle character of "'+k+'"')
    } else{
        alert('"'+k[k.length/divide2-1] + k[k.length/divide2]+'" is middle character of "'+k+'"')     
    }
}


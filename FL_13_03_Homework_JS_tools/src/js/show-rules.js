export function showRules (){
    let rules = document.getElementsByClassName ('img-pc-select');
   
    rules[0].style.display = 'block'
    document.getElementById('result-cont').innerHTML = '';
}

let reset = document.getElementsByClassName ('reset-lnk');

    reset[0].addEventListener('click', showRules);
   

import {getResult} from './get-result'
import {showResult} from './show-result'
import { hideRules} from './hide-rules'
import {whoWin} from './who-win'


 let count= 0;
let wins = [];
const maxCount = 3

export function doClickButton (ev){
    if (count === 0){
        hideRules();
    }
    if(count < maxCount){
        let choice = ev.target.textContent;
        let res = getResult(choice); 
       wins = whoWin(choice, res, count+1, wins).slice();
    
        count++;
        if(count === maxCount) {
          
           
            
           let totalRes = wins.reduce((prev, item) => {
                return prev+item;
            },0)
           
            let messageRes= document.createElement('p');
            
            if(!totalRes){
                messageRes.innerText = `Nobody win.`
            } else {
                if (totalRes > 0){
                    messageRes.innerText = `You win.`
                } else {
                    messageRes.innerText = `You lost.`

                }
            }
            document.getElementById('result-cont').append(messageRes);
            count= 0;
            wins = [];

            

        }
    } 

}

let button = document.getElementsByClassName ('button');
for (let i=0;i<button.length;  i++){
    button[i].addEventListener('click', doClickButton)
}

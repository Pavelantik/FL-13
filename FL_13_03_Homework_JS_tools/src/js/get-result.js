import {doPcStep} from './do-pc-step'
export function getResult(arg){
    let pcChoice = doPcStep();
    if (pcChoice === '0') {
        alert ('Error!')
    } else{
    
        return pcChoice;
    }
   
}
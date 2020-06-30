export function doPcStep(){
    let result =Math.floor(1+ Math.random()*3)+'';

    switch (result) {
        case '1':
            return 'Rock';
            break;
        case '2': 
        return 'Paper';
        break;
        case '3':
            return 'Scissors';
            break;
        default: 
            //debugger;
            return '0';  
        
          
    }

}
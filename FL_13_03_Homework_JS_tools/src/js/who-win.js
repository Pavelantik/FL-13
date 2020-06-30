export function whoWin(player, pc, round,wins){
    let roundRes= document.createElement('p');
      
    if(player === pc) {
        roundRes.innerText = `Round ${round}. ${player} vs. ${pc}: Nobody won.`
        wins.push(0);
        //return 0;
    } else {
        if(table[player] === pc) {
            roundRes.innerText = `Round ${round}. ${player} vs. ${pc}: PC won!.`
            wins.push(-1);
            //return -1;
        } else {
            roundRes.innerText = `Round ${round}. ${player} vs. ${pc}: You won.`
            wins.push(1);
           // return 1
        }
    }
    document.getElementById('result-cont').append(roundRes);
    return wins;
}
const table = {
    Rock: 'Paper',
    Paper: 'Scissors',
    Scissors:'Rock'
}
let game=function(step, currentPrize){
    const prizeArray= [25, 50, 100];
    let maxRange = 5;
    let rightPocket = Math.floor(Math.random() * (maxRange* step + 1));
    for (let i=3;i>=1;i--){   
        let answer= parseInt(prompt(`
        Choose a roulette pocket number from 0 to 5
        Attempts left: ${i}
        Total prize: ${currentPrize}
        Possible prize on current attempt: ${prizeArray[i-1]*step} `));
        if (isNaN(answer) || answer === null) {
            alert('Incorrect enter');
            continue;
        }
        if (answer===rightPocket){
            currentPrize += prizeArray[i-1];
            return [true, currentPrize];
        }
    }
    return [false, currentPrize];
}
if (!confirm('Do you want to play a game?')){
    alert('You did not become a billionaire, but can.');
} else{
    let isPlay=true;
    let step=1;
    let prize=0;
    while (isPlay) {
        let result=game(step, prize);
        if (result[0]){
            if (confirm(`Congratulation, you won!
            Your prize is: ${result[1]}$. 
            Do you want to continue?`)) {
                step++;
                prize=result[1];
            } else{
                isPlay= false;               
            } 
        } else{
            alert(`Thank you for your participation. Your prize is: ${result[1]}$`);
            if (confirm('Do you want to play again?')) {
                step = 1;
                prize = 0;
            } else{
                isPlay = false;
            }
        }
    }
}
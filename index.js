const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess>maxNum||guess<minNum){
        window.alert(`Enter a valid number`);
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if(guess>answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT THE ANSWER IS ${answer} and the attempt u took ${attempt}`);
            running=false;
        }
    }
}
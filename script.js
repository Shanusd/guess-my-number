let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
};
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click',
    function(){
        const guess =Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if(!guess){
            displayMessage('⛔ No Number')
        }else if (guess === secretNumber){
            document.querySelector('.number').textContent = secretNumber;
            displayMessage( '🎊 Correct Number')
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = "30rem";
            if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
        else if(guess !== secretNumber){
            if(score > 1){
                score--;
                document.querySelector('.score').textContent = score;
                displayMessage(guess > secretNumber?'📈 Too High' : '📉 Too Low');
            }else{
                displayMessage('😣 Game Over');
                document.querySelector('.score').textContent = 0;
              }
        }
        });
    document.querySelector('.again').addEventListener('click',
        function(){
            score = 20;
            secretNumber = Math.trunc(Math.random() * 20) + 1;

            document.querySelector('.score').textContent = '20';
            document.querySelector('.number').textContent = '?';
            displayMessage('Start guessing...')
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.check').textContent = 'Check';
            document.querySelector('.guess').value = null;
            document.querySelector('.highscore').textContent = highscore;
});
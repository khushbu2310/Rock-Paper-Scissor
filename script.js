function rpsGame(yourChoice) {
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());
    
    var result=decideWinner(humanChoice,botChoice);
    var message=finalMessage(result);

    rpsFrontEnd(yourChoice.id,botChoice,message);

}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissor':1 ,'rock':0.5 ,'paper':0},
        'paper':{'rock':1 ,'paper':0.5,'scissor':0},
        'scissor':{'paper':1 ,'scissor':0.5 ,'rock':0}
    };

    var yourScore= rpsDatabase[yourChoice][computerChoice];
    var computerScore= rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message':'You lost :(','color':'red'};
    }
    else if(yourScore===0.5){
        return {'message':'You tied :|','color':'yellow'};
    }
    else{
        return {'message':'You won :)','color':'green'};
    }
}

function rpsFrontEnd(humanImgChoice,botImgChoice,finalMessage){
    var imagesDatabase= {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDatabase[humanImgChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color'] +"; font-size:60px; padding:30px;'>"+finalMessage['message'] +"</h1>";    
    botDiv.innerHTML="<img src='"+imagesDatabase[botImgChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
    
    document.getElementById('flexbox-rps-id').appendChild(humanDiv);
    document.getElementById('flexbox-rps-id').appendChild(messageDiv);
    document.getElementById('flexbox-rps-id').appendChild(botDiv);

}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }

random_bg_color();

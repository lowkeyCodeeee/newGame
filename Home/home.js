

// mouseenter
// mouseleave
// wheel
// click


let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let background = document.getElementById('background');
let page = document.getElementById('page');
let bodyBg = document.getElementById('body');
let fPage = document.getElementById('p1');
let slideBackgroundEasy = document.getElementById('imgBg');
let slideBackgroundMedium = document.getElementById('mediumImg');
let slideBackgroundHard = document.getElementById('hardImg');

let go = document.getElementById('go');
let leaderboardDisplay = document.getElementById('leaderboardDisplay');
let leaderboardBtn = document.getElementById('leaderboards');

const divisionId = ['section', 'body', 'discription', 'boardsBackground']



// add audio tag in html
function createAudioElement() {
    var audio = document.createElement('audio');
    audio.id = 'touchSound';
    
    
    var sourceMP3 = document.createElement('source');
    sourceMP3.src = 'pop-sound-effect-197846.mp3';
    sourceMP3.type = 'audio/mpeg';


    var sourceOGG = document.createElement('source');
    sourceOGG.src = 'pop-sound-effect-197846.mp3';
    sourceOGG.type = 'audio/ogg';

    audio.appendChild(sourceMP3);
    audio.appendChild(sourceOGG);

    document.body.appendChild(audio);
}
createAudioElement();





// picture to slide when selecting difficulties
easy.addEventListener('mouseenter', function () {
    easy.style.opacity = "0.5";
})

easy.addEventListener('mouseleave', function () {
    easy.style.opacity = "1";
})

medium.addEventListener('mouseenter', function () {
    medium.style.opacity = "0.5";
})

medium.addEventListener('mouseleave', function () {
    medium.style.opacity = "1";
})
hard.addEventListener('mouseenter', function () {
    hard.style.opacity = "0.5";
})

hard.addEventListener('mouseleave', function () {
    hard.style.opacity = "1";
});



// Task for tomorrow I need to create a condition if the difficulty is == zIndex 1 and the Go anchor is click then it will
// be put toward that difficulty url path


easy.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        // adjust the easy size and position
        easy.style.transform = 'translate(-40px, -50px) scale(.6, .6)';
        easy.style.transition = 'transform 1s';
        easy.style.zIndex = -1;

        // adjust the hard position and size

        hard.style.transform = 'translate(-30px, 5px) scale(.6, .6)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;

        // adjust the medium position
        medium.style.transform = 'translate(100px, -80px) scale(1.7, 2)';
        medium.style.transition = 'transform 1s';
        medium.style.fontSize = '30px';
        medium.style.zIndex = 1;


        // Medium description 
    page.innerHTML = "In medium mode you will encounter cross word regarding to physics, 4 pics 1 word and math logic. The time depends on you. Go embark the challenge of medium mode and get your reward "

    }

    else {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        hard.style.transform = 'translate(100px, 70px) scale(1.7, 2)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = 1;
        hard.style.fontSize = '30px';


        easy.style.transform = 'translate(-40px, 40px) scale(.7, .7)';
        easy.style.zIndex = -1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(-20px, -10px) scale(.7, .7)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -2;


        // hard description 
        page.innerHTML = "The Calculus. Spin the wheel to get the problems although it is difficult but don’t give up  you will be able to overcome the challenge  through the consistency and effort "
    }

});



medium.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();

        hard.style.transform = 'translate(0, 0) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';

        medium.style.transform = 'translate(0, 0) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;
     // easy description
    page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";

    }

})


hard.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        
        hard.style.transform = 'translate(0, 10px) scale(1, 1)';
        hard.style.transition = 'transform 1s';
        hard.style.zIndex = -1;
        hard.style.fontSize = '30px';

        easy.style.transform = 'translate(0, 0) scale(1, 1)';
        easy.style.zIndex = 1;
        easy.style.transition = 'transform 1s';


        medium.style.transform = 'translate(0, -10px) scale(1, 1)';
        medium.style.transition = 'transform 1s';
        medium.style.zIndex = -1;

        // Easy description
    page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";

    }

})


window.addEventListener('load', function(){
    page.innerHTML = "In easy mode you will play the chemistry, programming and simple quiz with each of this contains 30 points with the total of 90 points. The time depends on you. go embark the  challenge of easy mode and get your reward";
    
});

go.addEventListener('click', function(){
    if(easy.style.zIndex == '1'){
        go.setAttribute('href', '/Home/Easy/easy.html');
    } else if( medium.style.zIndex == '1'){
    go.setAttribute('href', '/Home/Medium/medium.html');
    }
    else if(hard.style.zIndex == '1'){
        go.setAttribute('href', '/Home/Hard/hard.html')
    }
})

leaderboardBtn.addEventListener('click', function(){
    leaderboardDisplay.style.display = 'block';
    for(let i=0; i<divisionId.length; i++)
    {
        document.getElementById(divisionId[i]).style.opacity = '0.2';
    }
})

function goBackFromHome (){
    leaderboardDisplay.style.display = 'none';
    for(let i=0; i<divisionId.length; i++)
    {
        document.getElementById(divisionId[i]).style.opacity = '1';
    }
}



console.log("Localstorage" + localStorage);

// nice doneeeeee


// add some scrol sound

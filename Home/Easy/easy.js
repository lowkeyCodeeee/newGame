let programming = document.getElementById('programming');
let chemistry = document.getElementById('chemistry');
let simpleQuiz = document.getElementById('simpleQuiz');
let directory = document.getElementById('links');
let text = document.getElementById('page');
let playButton = document.getElementById('playButton');
let gameOptionsBackground = document.getElementById('gameOptions');
let details = document.getElementById('detailsPage');
let programmingKey = false, chemistryKey = false, simpleQuizKey = false;

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

chemistry.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(340px, 0) scale(1.6, 1.6)';
        programming.style.zIndex = '1';
        programming.style.opacity = '1';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(200px, 0) scale(.6, .6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-2';
        text.innerHTML = 'Programming';
        details.innerHTML = 'I love programming';
        directory.setAttribute("href", "ProgrammingGame/Programming.html");
        if (programmingKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }


        // ProgrammingGame/Programming.html
    }
    else {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        chemistry.style.transform = 'translate(-340px, 0) scale(.6, .6)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '-1';
        chemistry.style.opacity = '.2';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(-340px, 0) scale(1.6, 1.6)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '1';
        simpleQuiz.style.opacity = '1';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';



        programming.style.transform = 'translate(-200px, 0) scale(.6, .6)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-2';
        text.innerHTML = 'Simple Quiz';
        details.innerHTML = 'I love simple quiz';
        directory.setAttribute("href", "simpleQuiz/simplequiz.html");
        if (simpleQuizKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }


    }
})
// chemistryGame/table.html

simpleQuiz.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        simpleQuiz.style.opacity = '.2';
        simpleQuiz.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(10px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        programming.style.transform = 'translate(10px, 0) scale(.9, .9)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");

            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }

    }
})

programming.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        let touchSound = document.getElementById('touchSound');
        touchSound.play();
        programming.style.transform = 'translate(100px, 0) scale(1, 1)';
        programming.style.transition = 'transform .5s';
        programming.style.zIndex = '-1';
        programming.style.opacity = '.2';
        programming.style.transition = 'transform .5s , opacity .5s ease-in-out';

        chemistry.style.transform = 'translate(50px, 0) scale(.9, .9)';
        chemistry.style.transition = 'transform .5s';
        chemistry.style.zIndex = '1';
        chemistry.style.opacity = '1';
        chemistry.style.transition = 'transform .5s , opacity .5s ease-in-out';

        simpleQuiz.style.transform = 'translate(10px, 0) scale(1, 1)';
        simpleQuiz.style.transition = 'transform .5s';
        simpleQuiz.style.zIndex = '-1';
        text.innerHTML = 'Chemistry';
        details.innerHTML = 'I love chemistry';
        directory.setAttribute("href", "chemistryGame/table.html");
        if (chemistryKey) {
            directory.setAttribute("href", "#");
            playButton.style.opacity = '0.1';
        }
        else {
            playButton.style.opacity = '1';
        }
    }
});

let score = localStorage.getItem('scoreprog');
let chemScore = localStorage.getItem('chemScore');
let simpleQuizScore = localStorage.getItem('simpleQuizTotal');
let allGameTotalScore = (parseFloat(score) + parseFloat(chemScore) + parseFloat(simpleQuizScore));




function addInner(games, score) {
    var overlayText = games.querySelector('.texts');
    overlayText.innerHTML += `<h3 style="color: #FF204E;">You got ${parseFloat(score)} / 30 </h3>`;
    overlayText.innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
    overlayText.style.display = 'flex'; // Show the overlay text
}



// try avoid naming conflict





// saved all the total score of easy mode to localstorage easyTotal
localStorage.setItem('easyTotal', allGameTotalScore.toString());



// okay the key is already here 
window.addEventListener('load', function () {
    if (localStorage.getItem('gameFinished') !== null) {
        console.log('myUniqueKey does exist.');

        let permissionKey = localStorage.getItem('gameFinished');
        console.log(`This is the permision key value: ${permissionKey}`);

        // pag nauna kong ma concatenate ang 1 kesa sa 2 okay naman 
        // kaso pag nauna ung 2 ma concatenate sa 1 nawawala ung 2 tapos 1 lang ang natitira
        for (let i = 0; i < permissionKey.length; i++) {
            if (permissionKey[i] === '1') {
                console.log("This condition 1 is working");

                //chemistry.textContent = `${parseFloat(chemScore)} / 30`;
               

                addInner(chemistry, chemScore);
                chemistryKey = true;
            }


            else if (permissionKey[i] === '2') {
                console.log("This condition 2 is working");
                //programming.textContent = 'This level is already completed';
                // programming.textContent = `${parseFloat(score)} / 30`;
                //addInner(programming, score);
                
                programming.querySelector('.texts').innerHTML += `<h3 style="color: #FF204E;">You got ${score} / 30 </h3>`;
                programming.querySelector('.texts').innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
                programming.querySelector('.texts').style.display = 'flex'; // Show the overlay text
                 


                programmingKey = true;
            }
            else if (permissionKey[i] === '3') {
                console.log("This condition 3 is working");
                //addInner(simpleQuiz, simpleQuizScore);
                simpleQuiz.querySelector('.texts').innerHTML += `<h3 style="color:#FF204E;">You got ${simpleQuizScore} / 30 </h3>`;
                simpleQuiz.querySelector('.texts').innerHTML += `<p style="color: #FF204E;"> Can only play once </p>`;
                simpleQuiz.querySelector('.texts').style.display = 'flex'; // Show the overlay text
                 
                simpleQuizKey = true;
            }

            console.log("This are the keys list");
            console.log(permissionKey[i]);
        }

    } else {
        // The key does not exist in localStorage
        console.log('myUniqueKey does not exist.');
    }
})


//alert(localStorage.getItem('combinedKey'));





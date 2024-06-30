let crosshair;
let mainHome;
let currentState = 'default'; // Track current state or interface
let gameSituation = 'noStart'; // Track current game situation for cursor
let button;
let duckText, huntText;
let birdOne, birdTwo;

let startTime;
let delayTime = 2000;

let backgroundSound;
let volumeSlider;

//bird Fly
let birdOneX = -100;
let birdOneY = 10;
let birdTwoX = -100;
let birdTwoY = 130;
let flying = true;

let pistolStandby;
let pistolShoot;

let shooting = false;

let pistolStandbyWidth, pistolStandbyHeight;
let pistolShootWidth, pistolShootHeight;

//--------------------------------------------------------
let dog;
let fieldContainer;
let dogContainer;
let dogWalking, dogFound;
let dogJumping;
let dogGotOne, dogGotTwo;

let dogMoving = true;

let dogWalkX = 0;

let showDogFound = false;
let dogToGrass = false;

let dogY = 530;
let dogOpacity = 0;
let dogJumpingUp = true; 

//----------------------------------------------------------------
let level1Flying = true;
let duckSize = 100;
let chenyiX = -100;
let chenyiY = 30;

let weifengX = -130;
let weifengY = 130;

let junxuX = -160;
let junxuY = 250;

let level1Speed = 10;

let delayComeOut = 10000;

//----------------------------------------------------------------

let totalDucksKilled = 0; // For points
let ducksKilledWave = 0;
let missedDucks = 0;
let fieldWidth, fieldHeight;
let isEnableShooting = true;

let duck1, duck2, duck3, duck4;
let duckX, duckY;
let duckWSize = 100;
let duckHsize = 100;
let velocity = 5;

let duckFlyLeft, duckLeftDown, duckLeftUp, duckFlyRight, duckRightDown, duckRightUp, hit, falling;

let birdOneHit = false;
let birdTwoHit = false;
let birdThreeHit = false;


//------------------------------------------
let totalDucksPoint = 0; // For points
let totalDucksCoin = 0; // For points
let scoreText;
let pointText;
let winMessage = false;

let winner;


function preload() {
    crosshair = loadImage('sprites/crosshair.png');
    bidden = loadImage('sprites/forbidden.png');
    mainHome = loadImage('sprites/mainHome.png');
    birdOne = loadImage('sprites/duck/flyright.gif');
    birdTwo = loadImage('sprites/duck/flyright.gif');
    backgroundSound = loadSound('audio/intro-no-bark.mp3'); 
    pistolStandby = loadImage('sprites/pistol/pistol_standby.png');
    pistolShoot = loadImage('sprites/pistol/pistol_shoot.png');
    shootSound = loadSound('audio/pistolGun.mp3');

    //dog series
    dogLaughing = loadImage('sprites/dog/dogLaugh.gif');
    dogGotOne = loadImage('sprites/dog/gotOne.png');
    dogGotTwo = loadImage('sprites/dog/gotTwo.png');
    dogWalking = loadImage('sprites/dog/dogeWalking.gif');
    dogFound = loadImage('sprites/dog/found.png');
    dogJumping = loadImage('sprites/dog/pawelJumper.gif');

    //duck series
    duckFlyLeft = loadImage('sprites/duck/flyleft.gif');
    duckLeftDown = loadImage('sprites/duck/flyleftdown.gif');
    duckLeftUp = loadImage('sprites/duck/flyleftup.gif');
    duckFlyRight = loadImage('sprites/duck/flyright.gif');
    duckRightDown = loadImage('sprites/duck/flyrightdown.gif');
    duckRightUp = loadImage('sprites/duck/flyrightup.gif');
    hit = loadImage('sprites/duck/hit.png');
    falling = loadImage('sprites/duck/falling.gif');

    youwin = loadImage('sprites/youwin.png');
}

function setup() {
    createCanvas(1280, 720);
    noCursor();
    fieldWidth = 1280;
    fieldHeight = 720;

    pistolStandbyWidth = 200;
    pistolStandbyHeight = 200;
    pistolShootWidth = 200;
    pistolShootHeight = 200;

    

    let css = `
        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            font-size: 20px;
            font-family: inherit;
            padding: 1.25em 2em;
            border: solid 2px black;
            border-radius: 0.75em;
            font-weight: 700;
            color: black;
            background-color: #00FF00;
            transform-style: preserve-3d;
            transition: .15s cubic-bezier(0, 0, .6, 1);
        }
        
        button::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: #00CC00;
            border:1px solid black;

            transform: translate3d(0, .75em, -1em);
        }
        
        button:hover {
            background-color: #00FF00;
            transform: translate(0, .25em);
            box-shadow: 0 0 0 1px black, 0 .80em 0 0 #87CEEB;
            transform: translate3d(0, .5em, -1em);
        }

        #duck-text,
        #hunt-text {
            font-family: inherit;
            font-size: 100px;
            text-shadow: -10px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0 #000;
            position: absolute;
        }

        #duck-text {
            color: rgb(48, 206, 0);
            right: 100px;
        }

        #hunt-text {
            color: rgb(242, 125, 0);
            left: 100px;
            bottom: 350px;
        }

        #score-text {
        border:1px solid black;
        padding: 5px;
        font-size: 30px;
        background-color: rgba(0,0,0,0.1);
        padding: 7px
        } 

        #score-text:hover{
        border: 2px solid black;
        background-color : rgb(0,0,0,0.3);
        }


        .slider {
            -webkit-appearance: none;
            width: 100px;
            height: 15px;
            border-radius: 5px;
            background: #d3d3d3;
            outline: none;
            opacity: 0.7;
            transition: opacity .2s;
            
            border:1px solid green;
        }

        .slider:hover {
            opacity: 1;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #4CAF50;
            cursor: pointer;
        }

        .slider::-moz-range-thumb {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: #4CAF50;
            cursor: pointer;
        }

        .volume-container {
            display: flex;
            align-items: center;
            position: absolute;
            top: 10px;
            left: 10px;
            font-family: inherit;
            font-size: 20px;
            color: Black;
        }


    
}
    ; `
    
    let style = createElement('style', css);
    style.parent(document.head);
    
    button = createButton('START GAME');
    button.position(1280 / 2 - 75, 720 / 2 - 25); // Adjust position
    button.mousePressed(switchInterface);

    backButton = createButton('BACK TO MAIN MENU'); // Create back button
    backButton.position(10, 620); // Adjust position
    backButton.mousePressed(goBackToMainMenu); // Add event listener
    backButton.hide(); // Hide initially
    
    // Create and style the text elements
    duckText = createDiv('DUCK');
    duckText.id('duck-text');
    duckText.position(width / 2 - 280, height / 2 - 300); 

    huntText = createDiv('HUNT');
    huntText.id('hunt-text');
    huntText.position(width / 2, height / 2 - 180); 

    scoreText = createDiv('Score: 0');
    scoreText.id('score-text');
    scoreText.position(1150, 10);

    pointText = createDiv('Coin: 0');
    pointText.id('score-text');
    pointText.position(1030, 10);

    startTime = millis();

    backgroundSound.loop();
    volumeText = createP('Volume');
    volumeText.position(10, 10); 
    volumeText.class('volume-container');

    volumeSlider = createSlider(0, 1, 0.5, 0.01);
    volumeSlider.position(70, 32); 
    volumeSlider.class('slider');

    startTime = millis();
}
let birdOneFalling = false;
let birdTwoFalling = false;
let birdThreeFalling = false;



function level1() {
    if (level1Flying) {
        if (!birdOneHit) {
            image(duckFlyRight, chenyiX, chenyiY, duckSize, duckSize);
            chenyiX += level1Speed; 
            if (chenyiX > width) {
                chenyiX = -100;
            }
        } else if (birdOneFalling) {
            image(falling, chenyiX, chenyiY, duckSize, duckSize);
            chenyiY += level1Speed;
            if (chenyiY > height) {
                birdOneFalling = false; // Stop falling when reaching the bottom
                
            }
        } else {
            image(hit, chenyiX, chenyiY, duckSize, duckSize);
            setTimeout(() => birdOneFalling = true, 500); // Delay before falling
            
        }

        // Bird Two
        if (!birdTwoHit) {
            image(duckFlyRight, weifengX, weifengY, duckSize, duckSize);
            weifengX += level1Speed;
            if (weifengX > width) {
                weifengX = -130;
            }
        } else if (birdTwoFalling) {
            image(falling, weifengX, weifengY, duckSize, duckSize);
            weifengY += level1Speed;
            if (weifengY > height) {
                birdTwoFalling = false; // Stop falling when reaching the bottom
            }
        } else {
            image(hit, weifengX, weifengY, duckSize, duckSize);
            setTimeout(() => birdTwoFalling = true, 500); // Delay before falling
        }
        
         // Bird Three
         if (!birdThreeHit) {
            image(duckFlyRight, junxuX, junxuY, duckSize, duckSize);
            junxuX += level1Speed;
            if (junxuX > width) {
                junxuX = -160;
            }
        } else if (birdThreeFalling) {
            image(falling, junxuX, junxuY, duckSize, duckSize);
            junxuY += level1Speed;
            if (junxuY > height) {
                birdThreeFalling = false; // Stop falling when reaching the bottom
            }
        } else {
            image(hit, junxuX, junxuY, duckSize, duckSize);
            setTimeout(() => birdThreeFalling = true, 500); // Delay before falling
        }
    }
}


function draw() {
    background(135, 206, 235); // Sky blue color

    let crosshairX = mouseX;
    let crosshairY = mouseY;

    // Draw different interfaces based on currentState
    if (currentState === 'default') {
        drawDefaultInterface();
        duckText.show();
        huntText.show();
    } else if (currentState === 'otherInterface') {
        drawOtherInterface();
        backgroundSound.pause();
        duckText.hide();
        huntText.hide();
        if (dogMoving) {
            walkoutAnimation();
        } else if (showDogFound) {
            showDogFoundImage(); 
        } else if (dogToGrass) {
            moveDogToGrass();
        }
        
        shoot(crosshairX, crosshairY);
    }

    if (winMessage) {
        image(youwin,width / 2 - 200, height / 2 - 150, 500,200);
        backButton.show(); 
        isEnableShooting = false;
    }else{
      backButton.hide();
    }

    // Draw the crosshair or forbidden cursor
    push();
    imageMode(CENTER);
    if (gameSituation === 'noStart') {
        image(bidden, crosshairX, crosshairY, 50, 50);
    } else {
        image(crosshair, crosshairX, crosshairY, 50, 50); 

        if(millis() - startTime > delayComeOut){
            level1();
        }
    }
    pop();

    BirdMoveHomePage();
    bgSoundSlider();
}



function walkoutAnimation() {
    image(dogWalking, dogWalkX, dogY, 150, 150);
    dogWalkX += 5;
    if (dogWalkX >= width / 2 - 75) { // Adjust to center the image
        dogMoving = false;
        showDogFound = true;
    }
}  

function showDogFoundImage() {
    image(dogFound, width / 2 - 75, dogY, 150, 150);
    setTimeout(() => {
        showDogFound = false;
        dogToGrass = true;
    }, 1000); 
}

function moveDogToGrass() {
    if (dogJumpingUp) {
        image(dogJumping, width / 2 - 75, dogY, 150, 150);
        dogY -= 5;
        if (dogY <= 350) { 
            dogJumpingUp = false;
        }
    } else {
        dogOpacity += 5; // Increase opacity by 5 each frame (you can adjust this value)
        tint(255, dogOpacity); // Apply the opacity
        image(dogJumping, width / 2 - 75, dogY, 150, 150);
        noTint(); // Reset tint
        dogY += 5; // Move the dog down
        if (dogY >= 530) { // If the dog has reached the original Y position
            dogToGrass = false;
            dogOpacity = 0; // Reset opacity for next jump
        }
    }
}

function shoot(crosshairX, crosshairY) {
    if (shooting) {
        image(pistolShoot, crosshairX, 530, pistolShootWidth, pistolShootHeight);
        shootSound.play();
    } else {
        image(pistolStandby, crosshairX, 530, pistolStandbyWidth, pistolStandbyHeight);
    }

    if (mouseX <= width / 2) {
        push();
        translate(crosshairX, 530);
        scale(1, 1);
        image(shooting ? pistolShoot : pistolStandby, 0, 0, shooting ? pistolShootWidth : pistolStandbyWidth, shooting ? pistolShootHeight : pistolStandbyHeight);
        pop();
    } else {
        push();
        translate(crosshairX, 530);
        scale(-1, 1);
        image(shooting ? pistolShoot : pistolStandby, 0, 0, shooting ? pistolShootWidth : pistolStandbyWidth, shooting ? pistolShootHeight : pistolStandbyHeight);
        pop();
    }
}

function mousePressed() { 
    if (isEnableShooting) {
        shooting = true;
        setTimeout(() => shooting = false, 10);
    }
}

function mouseClicked() {
    let d = duckSize / 2;
    if (mouseX > chenyiX - d && mouseX < chenyiX + d && mouseY > chenyiY - d && mouseY < chenyiY + d) {
        birdOneHit = true;
        totalDucksPoint++;
        totalDucksCoin++;
        scoreText.html('Score: ' + totalDucksPoint);
        pointText.html('Coin: ' + totalDucksCoin);
    }

    if (mouseX > weifengX - d && mouseX < weifengX + d && mouseY > weifengY - d && mouseY < weifengY + d) {
        birdTwoHit = true;
        totalDucksPoint++;
        totalDucksCoin++;
        scoreText.html('Score: ' + totalDucksPoint);
        pointText.html('Coin: ' + totalDucksCoin);
    }

    if (mouseX > junxuX - d && mouseX < junxuX + d && mouseY > junxuY - d && mouseY < junxuY + d) {
        birdThreeHit = true;
        totalDucksPoint++;
        totalDucksCoin++;
        scoreText.html('Score: ' + totalDucksPoint);
        pointText.html('Coin: ' + totalDucksCoin);
    }

    if (totalDucksPoint === 3) {
        winMessage = true;

    }
}

function bgSoundSlider() {
    backgroundSound.setVolume(volumeSlider.value());
}

function drawDefaultInterface() {
    image(mainHome, 0, 0, 1280, 720);
}

function drawOtherInterface() {
    image(mainHome, 0, 0, 1280, 720);
}

function switchInterface() {
    if (currentState === 'default') {
        currentState = 'otherInterface';
        button.hide();
        volumeSlider.hide(); 
        volumeText.hide();
        level1();
    } else {
        currentState = 'default';
        button.show();
        volumeSlider.show(); // Show the slider
        volumeText.show();
    }
    checkGame(); // Ensure gameSituation changes when interface switches
}

function goBackToMainMenu() { // Function to switch back to main menu

  currentState = 'default';
  gameSituation = 'noStart';
  totalDucksPoint = 0; // Reset the score
    scoreText.html('Score: 0');
    winMessage = false;  // Reset win message
    isEnableShooting = true; // Re-enable shooting
    birdOneHit = false;  // Reset the hit status of the birds
    birdTwoHit = false;
    birdThreeHit = false;

    // Reset bird positions (to their initial positions)
    chenyiX = -100;
    chenyiY = 30;

    weifengX = -130;
    weifengY = 130;

    junxuX = -160;
    junxuY = 250;

    backButton.hide(); // Hide the button after it's pressed
    button.show();
    backgroundSound.loop();  // Restart the background music when back to main menu. 
    flying = true;   // Let the bird in home page fly again
    dogWalkX = 0;
    dogMoving = true;
    showDogFound = false;
    dogToGrass = false;

    dogY = 530;
    dogOpacity = 0;
    dogJumpingUp = true; 
    


    
    
    startTime = millis();
}

function checkGame() {
    if (gameSituation === 'noStart') {
        gameSituation = 'Start';
    } else {
        gameSituation = 'noStart';
        button.html('START GAME');
    }
}

function BirdMoveHomePage() {
    if(gameSituation === 'Start') {
        flying = false;
        birdOneX = -100;
        birdTwoX = -100;
    }

    if (flying) {
        birdOneX += 5; 
        if (birdTwoX > width) {
            flying = false; // Stop flying when the bird is out of bounds
        }
    }

    if(millis() - startTime > delayTime) {
        if (flying) {
            birdTwoX += 5; 
            if (birdTwoX > width) {
                flying = false; // Stop flying when the bird is out of bounds
                startTime = millis();
            }
        }
    }

    image(birdOne, birdOneX, birdOneY, 100, 100);
    image(birdTwo, birdTwoX, birdTwoY, 100, 100);
}

let crosshair;
let currentState = 'default'; // Track current state or interface
let button;
let duckText, huntText;
let birdOne, birdTwo;

let startTime;
let delayTime = 2000;

let shootSound;

let totalDucksKilled = 0; // For points
let birdOneX = -100, birdOneY = random(50, 200); // Randomize initial Y position
let birdTwoX = -100, birdTwoY = random(250, 400); // Randomize initial Y position
let flying = true;

function preload() {
    crosshair = loadImage('sprites/crosshair.png');
    birdOne = loadImage('sprites/duck/flyright.gif');
    birdTwo = loadImage('sprites/duck/flyright.gif');
    shootSound = loadSound('audio/singleGun.mp3');
    // Load other necessary images and sounds
}

function setup() {
    createCanvas(1280, 720);
    noCursor();

    button = createButton('START GAME');
    button.position(1280 / 2 - 75, 720 / 2 - 25); // Adjust position
    button.mousePressed(switchInterface);

    duckText = createDiv('DUCK');
    duckText.id('duck-text');
    duckText.position(width / 2 - 280, height / 2 - 300); // Adjust position

    huntText = createDiv('HUNT');
    huntText.id('hunt-text');
    huntText.position(width / 2, height / 2 - 180); // Adjust position 

    startTime = millis();
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
        shoot(crosshairX, crosshairY);
    }

    // Draw the crosshair
    image(crosshair, crosshairX, crosshairY, 50, 50);

    BirdMoveHomePage();
}

function mousePressed() {
    if (currentState === 'otherInterface') {
        if (mouseX > birdOneX && mouseX < birdOneX + 100 && mouseY > birdOneY && mouseY < birdOneY + 100) {
            hitBird(1);
        } else if (mouseX > birdTwoX && mouseX < birdTwoX + 100 && mouseY > birdTwoY && mouseY < birdTwoY + 100) {
            hitBird(2);
        }
    }
}

function hitBird(birdNumber) {
    if (birdNumber === 1) {
        birdOne = loadImage('sprites/duck/hit.png');
        birdOneX = -100; // Move off-screen
    } else if (birdNumber === 2) {
        birdTwo = loadImage('sprites/duck/hit.png');
        birdTwoX = -100; // Move off-screen
    }
    totalDucksKilled++;
    shootSound.play();
}

function drawDefaultInterface() {
    // Draw your default interface
}

function drawOtherInterface() {
    // Draw your other interface
}

function switchInterface() {
    if (currentState === 'default') {
        currentState = 'otherInterface';
        button.hide();
    } else {
        currentState = 'default';
        button.show();
    }
}

function BirdMoveHomePage() {
    if (flying) {
        birdOneX += random(1, 5);
        birdTwoX += random(1, 5);
        if (birdOneX > width) {
            birdOneX = -100;
            birdOneY = random(50, 200);
            birdOne = loadImage('sprites/duck/flyright.gif'); // Reset image
        }
        if (birdTwoX > width) {
            birdTwoX = -100;
            birdTwoY = random(250, 400);
            birdTwo = loadImage('sprites/duck/flyright.gif'); // Reset image
        }
    }

    image(birdOne, birdOneX, birdOneY, 100, 100);
    image(birdTwo, birdTwoX, birdTwoY, 100, 100);
}

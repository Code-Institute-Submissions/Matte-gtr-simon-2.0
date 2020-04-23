let power = false;
let strict = false;
let sound = true;
let sequence = [];
let playerSequence = [];
let hard = false;
let playerTurn = false;
let lightups = 0;
let interval = 0;
let level;
let clicks = 0;
let gameRunning = false;
let bgGrey = "rgb(211, 211, 211)";
let bgGreyOpt = "rgba(211, 211, 211, 1)";

const topLeft = $("#section-1");
const topRight = $("#section-2");
const bottomLeft = $("#section-3");
const bottomRight = $("#section-4");
const middle = $("#section-5");
const gameConsole = $(".console");

// Controls the visual side of the power, strict, sound and hard buttons to show if they are on or off 
function buttonPower(el) {
    let prnt = $(el).parent();
    let ths = $(el);
    if (prnt.css("backgroundColor") === bgGrey || prnt.css("backgroundColor") === bgGreyOpt) {
        prnt.removeClass("button-background-off").addClass("button-background-on");
        ths.removeClass("button-off").addClass("button-on");
    } else {
        prnt.removeClass("button-background-on").addClass("button-background-off");
        ths.removeClass("button-on").addClass("button-off");
    };
};

// Sets up the game ready to be played when power is turned on, and the reverse when it is switched off 
$(document).ready(function () {
    $("#power-button").click(function () {
        if ($("#power-button-container").css("backgroundColor") === bgGrey || $("#power-button-container").css("backgroundColor") === bgGreyOpt) {
            power = true;
            gameConsole.html("-");
            playSound("poweron", 0.1);
        } else {
            power = false;
            gameConsole.html("");
            sequence = [];
            playerTurn = false;
            clearInterval(interval);
            $("#play-button").html("PLAY");
            hideHardButton();
            playSound("poweroff", 0.1);
        };
    });
});

// Plays audio based on input (soundId is the Id of the audio element in index.html)
function playSound(soundId, volume) {
    if (sound) {
        let noise = document.getElementById(soundId);
        noise.currentTime = 0;
        noise.volume = volume;
        noise.play();
    };
};

// Sets strict to true or false depending on button position (on/off)
$("#strict-button").click(function () {
    if ($("#strict-button-container").css("backgroundColor") === bgGrey || $("#strict-button-container").css("backgroundColor") === bgGreyOpt) {
        strict = true;
    } else {
        strict = false;
    };
});

// Sets sound to true or false depending on button position (on/off)
$("#sound-button").click(function () {
    if ($("#sound-button-container").css("backgroundColor") === bgGrey || $("#sound-button-container").css("backgroundColor") === bgGreyOpt) {
        sound = true;
    } else {
        sound = false;
    };
});

// Sets hard to true or false depending on button position (on/off)
$("#hard-button").click(function () {
    if ($("#hard-button-container").css("backgroundColor") === bgGrey || $("#hard-button-container").css("backgroundColor") === bgGreyOpt) {
        hard = true;
    } else {
        hard = false;
    };
});

// displays hard button if ctrl is pressed
window.addEventListener("keydown", function (key) {
    if (key.keyCode === 17) {
        if (!sequence.includes(4)) {
            $("#hard-display").slideDown("hidden-button");
        };
    };
});

// hides hard button if ctrl is released (with a half second delay)
window.addEventListener("keyup", function (key) {
    if (key.keyCode === 17) {
        setTimeout(function () {
            $("#hard-display").slideUp("hidden-button");
        }, 500);
    };
});

// Displays hard button if "i" button is clicked (mobile & tablet only)
function toggleHard() {
    $("#hard-display").slideToggle("hidden-button");
};

// Generates a random number and adds it to the sequence array
function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

// Hides "i" button if sequence contains a 4
function hideHardButton() {
    if (sequence.includes(4)) {
        $("#show-hard-button").slideUp("d-none");
        $("#hard-display").slideUp("hidden-button");
    } else {
        $("#show-hard-button").slideDown("d-none");
    };
};

// Generates the max number for the randomNumber function depending on hard being true or false
function getDifficultyValue() {
    if (hard) {
        return 5;
    } else {
        return 4;
    };
};

// Activates start of game (play is clicked) and generates the first number in sequence variable
function startGame() {
    if (power) {
        sequence = [];
        playerSequence = [];
        lightups = 0;
        interval = 0;
        level = 1;
        $("#play-button").html("RESET");
        $(".console").html("level " + level);
        sequence.push(randomNumber(getDifficultyValue()));
        hideHardButton();
        playerTurn = false;
        power = false;
        interval = setInterval(playGame, 1000);
    };
};

// Runs the "computer" side of the game (sequence of flashes to copy)
function playGame() {
    gameRunning = true;
    clicks = 0;
    playerSequence = [];
    if (playerTurn === false) {
        setTimeout(function () {
            if (sequence[lightups] === 0) {
                sectionLight(topLeft);
            } else if (sequence[lightups] === 1) {
                sectionLight(topRight);
            } else if (sequence[lightups] === 2) {
                sectionLight(bottomLeft);
            } else if (sequence[lightups] === 3) {
                sectionLight(bottomRight);
            } else if (sequence[lightups] === 4) {
                sectionLight(middle);
            };
            lightups++;
        }, 300);
    };
    if (lightups === level) {
        clearInterval(interval);
        playerTurn = true;
        gameRunning = false;
        setTimeout(function () {
            power = true;
        }, 300);
    };
};

// Creates the flash when called by playGame or playerGame
function sectionLight(section) {
    if (section === topLeft) {
        playSound("simon1", 1);
    } else if (section === topRight) {
        playSound("simon2", 1);
    } else if (section === bottomLeft) {
        playSound("simon3", 1);
    } else if (section === bottomRight) {
        playSound("simon4", 1);
    } else if (section === middle) {
        playSound("simon5", 0.1);
    };
    section.children().addClass("light");
    if (playerTurn === false) {
        setTimeout(function () {
            section.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            section.children().removeClass("light");
        }, 200);
    };
};

// Creates the flashes and adds number to playerSequence during the player (clicking) part of the game
function playerGame(location) {
    if (power && playerTurn) {
        if (location === 0) {
            sectionLight(topLeft);
            playerSequence.push(location);
            checkSequence();
        } else if (location === 1) {
            sectionLight(topRight);
            playerSequence.push(location);
            checkSequence();
        } else if (location === 2) {
            sectionLight(bottomLeft);
            playerSequence.push(location);
            checkSequence();
        } else if (location === 3) {
            sectionLight(bottomRight);
            playerSequence.push(location);
            checkSequence();
        } else if (location === 4 && hard) {
            sectionLight(middle);
            playerSequence.push(location);
            checkSequence();
        };
        lightups = 0;
    };
};

// Checks if the player sequence entered is correct or not and responds accordingly 
// (replays sequence if wrong or resets if strics is true). Also notifies of winning the game and resets after preset time
function checkSequence() {
    if (sequence[clicks] === playerSequence[clicks]) {
        clicks++;
    } else {
        playerTurn = false;
        playerSequence = [];
        clicks = 0;
        if (strict === false) {
            gameConsole.html("X-X");
            power = false;
            setTimeout(function () {
                interval = setInterval(playGame, 1000);
                gameConsole.html("Level " + level);
                return;
            }, 1000);
        } else {
            gameConsole.html("X-X");
            setTimeout(function () {
                startGame();
                return;
            }, 1000);
        };
    };
    if (level === clicks) {
        playerTurn = false;
        level++;
        if (level === 21) {
            gameConsole.html("WINNER!!!");
            playSound("winner", 0.1);
            setTimeout(function () {
                startGame();
            }, 10000);
            return;
        };
        gameConsole.html("LEVEL UP");
        sequence.push(randomNumber(getDifficultyValue()));
        hideHardButton();
        setTimeout(function () {
            gameConsole.html("Level " + level);
            power = false;
            interval = setInterval(playGame, 1000);
            gameConsole.html("Level " + level);
        }, 1000);
    };
};

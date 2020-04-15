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

const topLeft = $("#section-1");
const topRight = $("#section-2");
const bottomLeft = $("#section-3");
const bottomRight = $("#section-4");
const middle = $("#section-5");
const gameConsole = $(".console");

function buttonPower(el) {
    let prnt = $(el).parent();
    let ths = $(el)
    if (prnt.css("backgroundColor") === "rgb(211, 211, 211)") {
        prnt.removeClass("button-background-off").addClass("button-background-on");
        ths.removeClass("button-off").addClass("button-on");
    } else {
        prnt.removeClass("button-background-on").addClass("button-background-off");
        ths.removeClass("button-on").addClass("button-off");
    };
};

$(document).ready(function () {
    $("#power-button").click(function () {
        if ($("#power-button-container").css("backgroundColor") === "rgb(211, 211, 211)") {
            power = true;
            gameConsole.html("-");
            playSound("../sounds/power-on.mp3", 0.1);
        } else {
            power = false;
            gameConsole.html("");
            sequence = [];
            playerTurn = false;
            clearInterval(interval);
            $(".play-button").html("PLAY");
            playSound("../sounds/power-off.mp3", 0.1);
        };
    });
});

function playSound(src, volume) {
    if (sound === true) {
        let sound = new Audio(src);
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play();
    };
};

$("#strict-button").click(function () {
    if ($("#strict-button-container").css("backgroundColor") === "rgb(211, 211, 211)") {
        strict = true;
    } else {
        strict = false;
    };
});

$("#sound-button").click(function () {
    if ($("#sound-button-container").css("backgroundColor") === "rgb(211, 211, 211)") {
        sound = true;
    } else {
        sound = false;
    };
});

$("#hard-button").click(function () {
    if ($("#hard-button-container").css("backgroundColor") === "rgb(211, 211, 211)") {
        hard = true;
    } else {
        hard = false;
    };
});

window.addEventListener("keydown", function (key) {
    if (key.keyCode === 17) {
        if (sequence.includes(4)) {
        } else {
            $("#hard-display").slideDown("hidden-button");
        };
    };
});

window.addEventListener("keyup", function (key) {
    if (key.keyCode === 17) {
        setTimeout(function () {
            $("#hard-display").slideUp("hidden-button");
        }, 500);
    };
});

function randomNumber(max) {
    return newNum = Math.floor(Math.random() * Math.floor(max));
};

function checkDifficulty() {
    if (hard === true) {
        return 5
    } else if (hard === false) {
        return 4
    };
};

function startGame() {
    if (power === true) {
        sequence = [];
        playerSequence = [];
        lightups = 0;
        interval = 0;
        level = 1;
        $(".play-button").html("RESET");
        $(".console").html("level " + level);
        sequence.push(randomNumber(checkDifficulty()));
        playerTurn = false;
        power = false;
        interval = setInterval(playGame, 1000);
    };
};

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
            lightups++
        }, 300)
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

function sectionLight(section) {
    if (section === topLeft) {
        playSound("../sounds/simonSound1.mp3", 1);
    } else if (section === topRight) {
        playSound("../sounds/simonSound2.mp3", 1);
    } else if (section === bottomLeft) {
        playSound("../sounds/simonSound3.mp3", 1);
    } else if (section === bottomRight) {
        playSound("../sounds/simonSound4.mp3", 1);
    } else if (section === middle) {
        playSound("../sounds/simonSound5.wav", 0.1);
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

function playerGame(location) {
    if (power === true && playerTurn === true) {
        if (location === 0) {
            sectionLight(topLeft)
            playerSequence.push(location);
            checkSequence();
        } else if (location === 1) {
            sectionLight(topRight)
            playerSequence.push(location);
            checkSequence();
        } else if (location === 2) {
            sectionLight(bottomLeft)
            playerSequence.push(location);
            checkSequence();
        } else if (location === 3) {
            sectionLight(bottomRight)
            playerSequence.push(location);
            checkSequence();
        } else if (location === 4 && hard === true) {
            sectionLight(middle)
            playerSequence.push(location);
            checkSequence();
        };
        lightups = 0;
    };
};

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
                return
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
            playSound("../sounds/winner.wav", 0.1);
            setTimeout(function () {
                startGame();
            }, 10000);
            return;
        };
        gameConsole.html("LEVEL UP");
        sequence.push(randomNumber(checkDifficulty()));
        setTimeout(function () {
            gameConsole.html("Level " + level);
            power = false;
            interval = setInterval(playGame, 1000);
            gameConsole.html("Level " + level);
        }, 1000);
    };
};

let power = false;
let strict = false;
let sound = true;
let sequence = [];
let playerSequence = [];
let difficulty = 4;
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
    if (prnt.css("backgroundColor") == "rgb(211, 211, 211)") {
        prnt.removeClass("button-background-off").addClass("button-background-on");
        ths.removeClass("button-off").addClass("button-on");
    } else {
        prnt.removeClass("button-background-on").addClass("button-background-off");
        ths.removeClass("button-on").addClass("button-off");
    };
};

$("#power-button").click(function () {
    if ($("#power-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
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

function playSound(src, volume) {
    if (sound == true) {
        let sound = new Audio(src);
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play();
    };
};

$("#strict-button").click(function () {
    if ($("#strict-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        strict = true;
    } else {
        strict = false;
    };
});

$("#sound-button").click(function () {
    if ($("#sound-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        sound = true;
    } else {
        sound = false;
    };
});

$("#hard-button").click(function () {
    if ($("#hard-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        difficulty = 5;
    } else {
        difficulty = 4;
    };
});

window.addEventListener("keydown", function (key) {
    if (key.keyCode == 17) {
        $("#hard-display").slideDown("hidden-button");
    };
});

window.addEventListener("keyup", function (key) {
    if (key.keyCode == 17) {
        setTimeout(function () {
            $("#hard-display").slideUp("hidden-button");
        }, 500);
    };
});

function randomNumber(max) {
    return newNum = Math.floor(Math.random() * Math.floor(max));
};

function startGame() {
    if (power == true) {
        sequence = [];
        playerSequence = [];
        lightups = 0;
        interval = 0;
        level = 1;
        $(".play-button").html("RESET");
        $(".console").html("level " + level);
        sequence.push(randomNumber(difficulty));
        playerTurn = false;
        power = false;
        interval = setInterval(playGame, 1000);
    };
};

function playGame() {
    gameRunning = true;
    clicks = 0;
    playerSequence = [];
    if (playerTurn == false) {
        setTimeout(function () {
            if (sequence[lightups] == 0) {
                one();
            } else if (sequence[lightups] == 1) {
                two();
            } else if (sequence[lightups] == 2) {
                three();
            } else if (sequence[lightups] == 3) {
                four();
            } else if (sequence[lightups] == 4) {
                five();
            };
            lightups++
        }, 300)
    };
    if (lightups == level) {
        clearInterval(interval);
        playerTurn = true;
        gameRunning = false;
        setTimeout(function () {
            power = true;
        }, 300);
    };
};

function one() {
    playSound("../sounds/simonSound1.mp3", 1);
    topLeft.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            topLeft.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            topLeft.children().removeClass("light");
        }, 200);
    };
};

function two() {
    playSound("../sounds/simonSound2.mp3", 1);
    topRight.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            topRight.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            topRight.children().removeClass("light");
        }, 200);
    };
};

function three() {
    playSound("../sounds/simonSound3.mp3", 1);
    bottomLeft.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            bottomLeft.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            bottomLeft.children().removeClass("light");
        }, 200);
    };
};

function four() {
    playSound("../sounds/simonSound4.mp3", 1);
    bottomRight.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            bottomRight.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            bottomRight.children().removeClass("light");
        }, 200);
    };
};

function five() {
    playSound("../sounds/simonSound5.wav", 0.1);
    middle.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            middle.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            middle.children().removeClass("light");
        }, 200);
    };
};

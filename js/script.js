let power = false;
let strict = false;
let sound = true;

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


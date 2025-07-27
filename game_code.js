let start, rl, river, boat, stick, spear, bear;

function start_game() {
    displayDialogue("Hello! Do you want to play a Yes/No Game?");
    showControls(); // Ensure input/button visible
}

function displayDialogue(text) {
    document.getElementById("game_text").textContent = text;
}

function hideControls() {
    document.getElementById("game_input").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";
}

function showControls() {
    document.getElementById("game_input").style.display = "inline-block";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("restart").style.display = "none";
}

function restartGame() {
    // Reset variables
    start = rl = river = boat = stick = spear = bear = undefined;
    start_game();
}

function nextstage() {
    const inputField = document.getElementById("game_input");
    const userChoice = inputField.value.toLowerCase().trim();
    inputField.value = "";

    if (userChoice === "") return;

    if (!start) {
        start = userChoice;
        if (start === "yes") {
            displayDialogue("Okay, Let's Start.... Do you go right or left (type right/left)?");
        } else if (start === "no") {
            displayDialogue("Okay :( Maybe Next Time..");
            hideControls();
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            start = undefined;
        }
        return;
    }

    if (!rl) {
        rl = userChoice;
        if (rl === "right") {
            displayDialogue("You reach a steep cliff, fall off, and die! You Lose.");
            hideControls();
        } else if (rl === "left") {
            displayDialogue("You come across a river. Do you choose to cross it? (Yes/No)");
        } else {
            displayDialogue("Invalid response... Please type 'right' or 'left'.");
            rl = undefined;
        }
        return;
    }

    if (!river) {
        river = userChoice;
        if (river === "no") {
            displayDialogue("You are lucky! The river was filled with alligators. Do you board a boat? (Yes/No)");
        } else if (river === "yes") {
            displayDialogue("You are eaten by alligators. You Lose.");
            hideControls();
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            river = undefined;
        }
        return;
    }

    if (!boat) {
        boat = userChoice;
        if (boat === "yes") {
            displayDialogue("You chose to board the boat in a river full of alligators. You Lose.");
            hideControls();
        } else if (boat === "no") {
            displayDialogue("Good choice! You see a stick on the road. Do you pick it up? (Yes/No)");
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            boat = undefined;
        }
        return;
    }

    if (!stick) {
        stick = userChoice;
        if (stick === "yes") {
            displayDialogue("The stick is riddled with poisonous insects. You die of poison. You Lose.");
            hideControls();
        } else if (stick === "no") {
            displayDialogue("Good choice! You see a sharpened spear. Do you take it? (Yes/No)");
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            stick = undefined;
        }
        return;
    }

    if (!spear) {
        spear = userChoice;
        if (spear === "yes") {
            displayDialogue("You have taken the spear. You see a bear in your path. Do you choose to fight it? (Yes/No)");
        } else if (spear === "no") {
            displayDialogue("You are not prepared for danger and perish... You Lose.");
            hideControls();
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            spear = undefined;
        }
        return;
    }

    if (!bear) {
        bear = userChoice;
        if (bear === "yes") {
            displayDialogue("You defeated the bear and uncovered a treasure. Congratulations! You WIN :)");
        } else if (bear === "no") {
            displayDialogue("You lacked the courage to fight. You Lose.");
        } else {
            displayDialogue("Invalid response... Please type 'yes' or 'no'.");
            bear = undefined;
            return;
        }
        hideControls(); // Win or lose — end the game
    }
}

window.onload = start_game;

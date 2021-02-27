
curr_sound = "";
ANSWER = document.getElementById('answer');

function quiz() {

    // Clear answer
    document.getElementById('answer').innerHTML = "";

    // Gen list of checked boxes
    var checkboxes = document.getElementsByName('chord');
    var to_choose_from = [];
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            to_choose_from.push(checkbox);
        }
    }

    // Check if none selected
    if (to_choose_from.length <= 0) {
        alert("Please be sure to check at least one box.");
        return;
    }

    // Choose random from list
    const ind = Math.floor(Math.random() * to_choose_from.length);
    curr_sound = to_choose_from[ind];

    // Little bit of user feedback
    document.getElementById('answer').innerHTML = "*********";

    // Play sound
    var audio = new Audio('Chords/'+to_choose_from[ind].value);
    audio.play();
}

function repeat() {
    // Only play if there is a sound selected
    if (curr_sound) {
        var audio = new Audio('Chords/' + curr_sound.value);
        audio.play();
    } else {
        alert("No sound selected");
    }
}
function clear_checks() {
    // NOT USED
    // Clear the checkboxes and reset everything
    console.log("ldl");
    document.getElementById('answer').innerHTML = "*********";
    curr_sound = "";
    var checkboxes = document.getElementsByName('chord');
    for (var checkbox of checkboxes) {
        checkbox.check = false;
    }
}

function reveal() {
    if (curr_sound) {
        document.getElementById('answer').innerHTML = curr_sound.id;
    }
}

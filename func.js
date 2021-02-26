
curr_sound = "";
ANSWER = document.getElementById('answer');

function quiz() {

    // Clear answer
    

    // Gen list of checked boxes
    var checkboxes = document.getElementsByName('chord');
    var to_choose_from = [];
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            to_choose_from.push(checkbox);
            console.log("Found:");
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

    var audio = new Audio('Chords/'+to_choose_from[ind].value);
    audio.play();

}

function repeat() {
    if (curr_sound) {
        var audio = new Audio('Chords/' + curr_sound.value);
        audio.play();
    }
}

function reveal() {
    console.log(curr_sound);
}
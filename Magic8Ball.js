document.getElementById("consult").addEventListener("click", eightBall);

// Function for 8 ball
function eightBall() {

    // Use if statements and Math.random to create phrases that will be given on the webpage to the end user.
    // input
    let quesInput = document.getElementById("questioninput").value;
        if (quesInput == "") {
            document.getElementById("Predictions").innerHTML = "Hey, where's the question?"
        }else if(quesInput == "Does magic 8 ball actually work?") {
            document.getElementById("Predictions").innerHTML = "How dare you doubt me!"
        }else if(quesInput == "Is JavaScript awesome?") {
            document.getElementById("Predictions").innerHTML = "Of Course!"
        }else {
            document.getElementById("Predictions").innerHTML = randomResponse()
        }
}

function randomResponse() {

    // Variable for Math.random
    let k = Math.floor(Math.random() * 10);

    // Statements for output

    if (k == 0) {
        return "That will never happen."
        }else if(k == 1) {
           return "Outlook not so good."
        }else if(k == 2) {
           return "That May be the case."
        }else if(k == 3) {
           return "Definitely not!"
        }else if(k == 4) {
           return "As I see it, yes."
        }else if(k == 5) {
           return "Without a Doubt."
        }else if(k == 6) {
           return "Of course!"
        }else if(k == 7) {
           return "Don't count on it."
        }else if(k == 8) {
           return "Concentrate and ask again."
        }else {
           return "Not in a million years!"
        }
 
}
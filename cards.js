var button1 = document.getElementById("generate-linear-card");
var linear1 = document.getElementById("linear-card1");
var linear2 = document.getElementById("linear-card2");
var linear3 = document.getElementById("linear-card3");
var linearCard1Q1 = document.getElementById("linear-card1-q1");
var linearCard1Q2 = document.getElementById("linear-card1-q2");
var linearCard1Q3 = document.getElementById("linear-card1-q3");
var linearCard1Q4 = document.getElementById("linear-card1-q4");
var tryNum = Math.floor(Math.random()*3)+1;
function display1() {
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.classList.toggle("appear");
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.classList.toggle("appear");
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.classList.toggle("appear");
        linear3.style.display = "block";
    }
}
/* document.addEventListner('DOMContentLoaded', function(event) {
    button1.addEventListener('mousedown', display1());
}); */
button1.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.style.display = "block";
    }
});
document.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key == "Enter") {
        if (linearCard1Q1.value == "4") {
            // alert("die");
            if (linearCard1Q2.value == "2") {
                if (linearCard1Q3.value == "-10") {
                    if (linearCard1Q4.value == "2") {
                        alert("Correct");
                    } else {alert("something's wrong");linearCard1Q1.value = "";}
                } else {alert("something's wrong");linearCard1Q1.value = "";}
            } else {alert("something's wrong");linearCard1Q1.value = "";}
        } else {
            alert("something's wrong");
            linearCard1Q1.value = "";
        }
    }
});
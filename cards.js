var button1 = document.getElementById("generate-linear-card");
var linear1 = document.getElementById("linear-card1");
var linear2 = document.getElementById("linear-card2");
var linear3 = document.getElementById("linear-card3");
var linearCard1Q1 = document.getElementById("linear-card1-q1");
var tryNum = Math.ceil(Math.random()*3);
function display1() {
    alert("Working");
    if (tryNum == 1) {
        alert(tryNum);
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        alert(tryNum);
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        alert(tryNum);
        linear3.style.display = "block";
    }
}
/* document.addEventListner('DOMContentLoaded', function(event) {
    button1.addEventListener('mousedown', display1());
}); */
button1.addEventListener("mousedown", function(event) {
    alert("Working");
    if (tryNum == 1) {
        alert(tryNum);
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        alert(tryNum);
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        alert(tryNum);
        linear3.style.display = "block";
    }
});
document.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key == "Enter") {
        if (linearCard1Q1.value == "4") {
            // alert("die");
            alert("correct");
        } else {
            linearCard1Q1.value = "";
        }
    }
});
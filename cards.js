var button1 = document.getElementById("generate-linear-card");
var linear1 = document.getElementById("linear-card1");
var linear2 = document.getElementById("linear-card2");
var linear3 = document.getElementById("linear-card3");
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
button1.addEventListener('mousedown', display1());
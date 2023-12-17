const favColorButton = document.querySelector("#color");
const favPlaceButton = document.querySelector("#place");
const favRitualButton = document.querySelector("#ritual");

function clickColor(evt) {
    alert("My favorite color is Blue");
}

favColorButton.addEventListener("click", clickColor);

function clickPlace(evt) {
    alert("My favorite place is Trinidad");
}

favPlaceButton.addEventListener("click", clickPlace);

function clickRitual(evt) {
    alert("My favorite ritual is going to sleep with the TV on");
}

favRitualButton.addEventListener("click", clickRitual);

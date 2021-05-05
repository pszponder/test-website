const randWords = [
    "Hampster",
    "Website",
    "Dog",
    "Cat",
    "Dragon",
    "Viking",
    "Mountain"
];

function changeInnerHTML(randArray) {
    let i = Math.floor( Math.random() * (randArray.length));
    document.getElementById("text").innerHTML = randArray[i].toUpperCase();
}

document.getElementById("btn").addEventListener("click", function () {
    changeInnerHTML(randWords);
});
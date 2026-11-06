const id1 = document.getElementById("part1");
const id2 = document.getElementById("part2");
const id3 = document.getElementById("part3");
const id4 = document.getElementById("part4");
const id5 = document.getElementById("part5");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

button1.addEventListener("click", () => {
    id1.style.display = "block"
});

button2.addEventListener("click", () => {
    id2.style.display = "block"
});

button3.addEventListener("click", () => {
    id3.style.display = "block"
});

button4.addEventListener("click", () => {
    id4.style.display = "block"
});

button5.addEventListener("click", () => {
    id5.style.display = "block"
});
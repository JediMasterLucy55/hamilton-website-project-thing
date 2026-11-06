const id1 = getElementById("part1");
const id2 = getElementById("part2");
const id3 = getElementById("part3");
const id4 = getElementById("part4");
const id5 = getElementById("part5");

const button1 = getElementById("button1");
const button2 = getElementById("button2");
const button3 = getElementById("button3");
const button4 = getElementById("button4");
const button5 = getElementById("button5");

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
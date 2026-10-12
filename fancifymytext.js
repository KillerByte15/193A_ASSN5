const btn = document.getElementById("Bigger");
const textArea = document.getElementById("Text");
const fancy = document.getElementById("FancyShmancy");
const betty = document.getElementById("BoringBetty");
const moo = document.getElementById("Moo");

btn.addEventListener("click", () => {
    alert("Hello, world!");
    textArea.style.fontSize = "24px";
});

fancy.addEventListener("click", () => {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
});

betty.addEventListener("click", () => {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
});

moo.addEventListener("click", () => {
    textArea.value = textArea.value.toUpperCase();
    var parts = textArea.value.split(".");
    textArea.value = parts.join("-Moo.");
});
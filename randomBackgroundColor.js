// created random background color
document.body.style.backgroundColor = randomColor();

function randomColor() {
    // hexadecimal format 16 char in str
    return "#" + Math.random().toString(16).substr(-6);
}

// generate a list of random numbers which doesn't contain given array of excluded numbers
const excludeNUmbers = [1, 18, 12, 20, 2, 3];

function generateRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min) + min);
    return excludeNUmbers.includes(num) ? generateRandom(min, max) : num;
}

for (let e = 0; e <= 20; e++) {
    let min = 1;
    let max = 20;
    let num = generateRandom(min, max);
    console.log(num);
}


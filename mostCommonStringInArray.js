// Define a function that takes an array of strings, and returns the most
// commonly occurring string in that array.
// Things to watch for,
// ● Make a object to count occurences
// ● Thinking about edge cases
// ● What does the question want you to output, read it carefully, a string? An object?

const arrayOfStrings = [
    "yes",
    "yes",
    "yes",
    "no",
    "no",
    "j",
    "k",
    "yes",
    "no",
    "no",
    "k",
    "yes",
];
const most = () => {
    const stringCounter = {};
    arrayOfStrings.forEach((word) => {
        if (!stringCounter[word]) {
            stringCounter[word] = 1;
        } else {
            stringCounter[word]++;
        }
    });
    const vals = Object.values(stringCounter);
    const biggest = Math.max(...vals);
    const counterArray = Object.entries(stringCounter);
    const frequentestArray = counterArray.filter(([word, count]) => {
        return count === biggest;
    });

    let winWords = Object.fromEntries(frequentestArray);
    return winWords;
};

console.log(most());

let tvShows = [
    "Game of Thrones",
    "Parks and Recreation",
    "Community",
    "Big Little Lies",
    "Gilmore Girls",
    "Survivor",
    "The Bachelor",
    "Law & Order",
    "Hannibal",
    "Stranger Things",
    "Daredevil",
    "The Haunting of Hill House",
    "Batman: The Animated Series",
    "Rick & Morty",
    "The Office",
    "LOST"
];

//1. Let's review the current state of our TV show list.
//Log the entire array of tv shows to the console.
console.log(tvShows)
    //2. How far behind are we in our tv watching endeavour?
    //Log the length of the array in the phrase "I still need to watch ___ TV Shows"
console.log(`I still need to watch ${tvShows.length} series.`)
    //3. Choose your most anticipated show.
console.log(tvShows[14])
    //Log the index of any show such as "The Bachelor".
console.log(tvShows.indexOf("The Bachelor"))
    //4. Save that value as a variable, then use that value to log the word "The Bachelor".
let valueIndexOfBachelor = tvShows.indexOf("The Bachelor")
    //5. Let's find which show comes after The Bachelor on our list. Which show comes before? Console log your results.
let valueOfBeforeBachelor = tvShows.indexOf("The Bachelor") - 1;
let valueAfterBachelor = tvShows.indexOf("The Bachelor") + 1;

console.log(tvShows[valueAfterBachelor]);
console.log(tvShows[valueOfBeforeBachelor]);



//6. Wait! What about The Good Place? Log the index of "The Good Place". What does this value mean?

console.log(tvShows.indexOf("The Good Place"));
// negative index means non existing array element


//7. I don't get HBO to watch Game of Thrones. Remove the first element in the array and log the array again.
tvShows.shift();

//8. Your friends spoil the ending of LOST and you decide to skip it. Remove the last item in the array and log the array again.
tvShows.pop();
console.log(tvShows);

//9. Let's make a separate list for our Netflix favourites. Remove "Stranger Things", "Daredevil", and "The Haunting of Hill House" from the tvShows array and populate them in a new array called netflixExclusives. Log this new array.

let netflixExclusives = tvShows.splice(8, 3);

console.log(netflixExclusives);

//10. Now that we have cleaned up our original tvShows list, let's order it alphabetically and log out the array.

tvShows.sort();
//11. Change of plans - sort in REVERSE alphabetical order and log the array again!
tvShows.reverse();
//12. After watching Teen Wolf you become interested in actor Jason Bateman's work. Add "Arrested Development" and  "Ozark" to the array and log the array again.
tvShows.push('Arrested Development', 'Ozark');
console.log(tvShows)
    //13. Donald Glover releases a new track and you get inspired to watch "Atlanta" immediately. Add it to the start of the array and, you guessed it, log it out.
tvShows.unshift('Atlanta');
console.log(tvShows[0]);
//14. Let's make the perfect binge watching weekend plan with the 6th, 7th, 8th, 9th, and 10th show in the list. Make a new array called perfectWeekend WITHOUT removing them from the shows to watch array.
let perfectWeekend = tvShows.slice(5, 11);

console.log(perfectWeekend)

//15. Let's spice up our list. Log the perfect weekend array as a string with your favourite emoticon ⭐️ in-between each TV show.


for (let i = 0; i < tvShows.length; i++) {
    console.log('⭐️' + tvShows[i]);
}



//16. Awesome! To help with our organization lets combine the perfectWeekend and netflixExclusives arrays into a NEW array called bingeList. Log out your final array.



console.log(perfectWeekend);
console.log(netflixExclusives);

let bingeList = perfectWeekend.concat(netflixExclusives);

console.log(bingeList);

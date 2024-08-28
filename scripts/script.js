console.log("Hello JavaScript Data Structures");

let movies=[
    "Deadpool1",
    "Deadpool2",
    "Inception",
    "Avengers: End Game",
    "Leon",
    "The Matrix",
    "Lion King",
];

console.log(movies);
console.log(movies[5]);
// the index starts from 0
console.log(movies.length);
// length indicats numbers of items

console.log(movies[movies.length-1]);
// can't just use "-1" in JS

let cohortSlogans = [
    "ligntpink salmon",
    "fly you fools",
    "you don't know me!",
    "my heart will go on",
];

console.log(cohortSlogans);
console.log([4]);

cohortSlogans.push("10-minute breather??")
// use <push> to add a new item to the array
console.log(cohortSlogans);
// cohortSlogans.pop()

cohortSlogans.splice(1,2);
// remove 2 elements starting from index 1

let kittyCat={
    name:"Fiji",
    age:2,
    color: "grey",
    isSassyCat:true,
    kittyPals:["Tom","Jerry","Gnochii"],
};
console.log(kittyCat);
console.log(kittyCat.name);
console.log(kittyCat.isSassyCat);
console.log(kittyCat.kittyPals);
console.log(kittyCat.kittyPals[2]);

let kittyArray = [kittyCat, {name:"Tim", age:8,color:"white",isSassyCat:false}];
console.log(kittyArray);

kittyCat.lives=9;
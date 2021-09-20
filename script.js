
const futures = [
    "Better Luck next time",
    "Thats not going to happend",
    "Maybe next time",
    "Yes",
    "Is not For you",
    "For sure",
    "Maybe",
    "Ask me again",
    "No",
    "Only if you really work for it",
    "Ask me Tomorrow",
    "Be careful with that",
    "everything is going to work",
    "thats really a mystery",
    "The answer is yes",
    "The answer is no",
    "trust no one",
    "that will kill you",
    "i can see happiness in the future",
    "keep your mind and hope",

];
const adivinator = [
    "The Angels say: ",
    "The Demons say ",
    "The Destiny say: "
];

function getFortunes(){
    let getFortunes1 = futures[Math.floor(Math.random() * futures.length)];
    let getFortunes2 = adivinator[Math.floor(Math.random() * adivinator.length)]
    console.log(getFortunes2, getFortunes1);
}
console.log(getFortunes());
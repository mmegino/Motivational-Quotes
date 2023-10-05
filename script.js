let quotes = [

    // Motivational quotes for entrepreneurs
    {
        "quote": "All our dreams can come true, if we have the courage to pursue them",
        "author": "Walt Disney"
    },{
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
    },{
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
    },{
        "quote": "It’s hard to beat a person who never gives up.",
        "author": "Babe Ruth"
    },{
        "quote": "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.",
        "author": "Leah Busque"
    },{
        "quote": "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
        "author": "Joss Whedon"
    },{
        "quote": "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        "author": "Michele Ruiz"
    },
    // Motivational quote of the day
    {
        "quote": "Everything you can imagine is real.",
        "author": "Pablo Picasso"
    },{
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt"
    },{
        "quote": "Do what you feel in your heart to be right―for you’ll be criticized anyway.",
        "author": "Eleanor Roosevelt"
    },{
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "author": "Dalai Lama XIV"
    },{
        "quote": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln"
    },{
        "quote": "Gold",
        "author": "Yourself"
    },
]

//variables

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// event listener 

btn.addEventListener('click', getMQuote);

function getMQuote() {

    let number = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
    author.innerHTML = '<span>---</span>' + quotes[number].author;
}
"use strict"

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showloadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeloadingSpinner () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

/* === FUNCTION TO FETCH QUOTES LOCAL === */

function newQuote (){
    showloadingSpinner();
    // Math.random returns a number between 0 and 1
    // therfore it will always be a 0.sth number
    // we need to wrap math.floor around math.random to get an equal number
    // multiplicated by the number of apiQuotes.lenght we make sure that we will never have a number
    // greater than the objects in the apiQuotes (the ones we fetch 1643 roughly)
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author field is blank and replace with unknown
    if (!quote.author) {
        authorText.textContent = "unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
     if (quote.text.length > 100) {
         quoteText.classList.add('long-quote');
     } else {
         quoteText.classList.remove('long-quote');
     }
     // Set quote hide loader
    quoteText.textContent = quote.text;
    removeloadingSpinner();
}
newQuote();

// Tweet Quote 
function tweetQuote (){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
};

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



/* === FUNCTION TO FETCH QUOTES ONLINE === */

// let apiQuotes = [];

/* Show New Quote */

// function newQuote (){
//     // Math.random returns a number between 0 and 1
//     // therfore it will always be a 0.sth number
//     // we need to wrap math.floor around math.random to get an equal number
//     // multiplicated by the number of apiQuotes.lenght we make sure that we will never have a number
//     // greater than the objects in the apiQuotes (the ones we fetch 1643 roughly)
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// }

/* Get Quotes from API */
// async function getQuotes () {
//     showloadingSpinner()
//     const apiURL = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         // Check if author field is blank and replace with unknown
//     if (!quote.author) {
//         authorText.textContent = "unknown";
//     } else {
//         authorText.textContent = quote.author;
//     }
//     // Dynamically reduce font size for long quotes
//      if (quote.text.length > 100) {
//          quoteText.classList.add('long-quote');
//      } else {
//          quoteText.classList.remove('long-quote');
//      }
//     quoteText.textContent = quote.text;
//     removeloadingSpinner();
//         apiQuotes = await response.json();
//         newQuote();
//         // throw new Error('ooops');
//     } catch (error) {
//         console.log('Whoooops, no quote' , error);
//         getQuotes();
//     }
// }



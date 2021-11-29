const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

const getQuote = function(){
    const proxyUrl = "https://mighty-lowlands-02831.herokuapp.com/" ;
    const apiQuotes = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    fetch(proxyUrl + apiQuotes)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            // Show "unknown" for quotes without author
            if (data.quoteAuthor === "") {
                quoteAuthor.innerText = "Unkown";                
            } else {
                quoteAuthor.innerText = data.quoteAuthor;                
            }
            // Reduce font-size for long quotes
            if (data.quoteText.length > 90) {
                quoteText.classList.add('long-quote');
            } else {
                quoteText.classList.remove('long-quote');                
            }
            quoteText.innerText = data.quoteText;
        })
        .catch(function(error){
            getQuote();
            console.log("Looks like there's a problem with this quote", error);
        })
};


window.addEventListener("load", getQuote);


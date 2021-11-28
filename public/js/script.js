const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

window.addEventListener("load", function getQuote(){
    const proxyUrl = "https://mighty-lowlands-02831.herokuapp.com/" ;
    const apiQuotes = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    fetch(proxyUrl + apiQuotes)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            quoteAuthor.innerHTML = data.quoteAuthor;  
            quoteText.innerHTML = data.quoteText;
        })
        .catch(function(error){
            getQuote();
            console.log("Looks like there's a problem with this quote", error);
        })
});
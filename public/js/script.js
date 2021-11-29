const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');

const loading = function() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const complete = function() {
    if(!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
    }
}

const getQuote = function(){
    loading();
    const proxyUrl = "https://mighty-lowlands-02831.herokuapp.com/" ;
    const apiQuotes = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    // Get quote
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
            // Stop Loader & show quote
            complete();
        })
        .catch(function(error){
            getQuote();
            console.log("Looks like there's a problem with this quote", error);
        })
};

window.addEventListener("load", getQuote);

twitterBtn.addEventListener("click", function(){
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;
    // const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`; 
    window.open(twitterUrl, "_blank");
})

newQuoteBtn.addEventListener("click", getQuote);


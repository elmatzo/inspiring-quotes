var today = new Date();
var day = today.getDate();
var quote = quotes[ day % quotes.length ];

setQuoteText();
setAuthorText();

function setQuoteText() {
  var quoteElement = document.getElementById( 'quote' );
  quoteElement.innerHTML = '&bdquo;' + quote.content +  '&rdquo;';
}

function setAuthorText() {
  var authorElement = document.getElementById( 'author' );
  authorElement.innerHTML = quote.author;
}

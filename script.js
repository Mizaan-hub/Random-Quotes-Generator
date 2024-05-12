const quote = document.getElementById("quote");
const author = document.getElementById("author");
const body = document.getElementsByTagName("body")[0]

const api_url = "https://api.quotable.io/random";

// fetching the data from url.
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;

  const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color;
    
}

getQuote(api_url);

function share() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ─ by " +
      author.innerHTML,
    "Tweet Window",
    "width=500,height=600"
  );
}
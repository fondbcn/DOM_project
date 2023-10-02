let btn=document.querySelector("#new-quote")
let quote=document.querySelector(".quote")
let person=document.querySelector(".person")
const quotes = [
  {
    quote: "Always do your best. What you plant now, you will harvest later.",
    person: "Og Mandino",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "If you can dream it, you can do it.",
    person: "Walt Disney",
  },
  {
    quote: "The only way to limit yourself is to place limits on your imagination.",
    person: "Oprah Winfrey",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "Don't give up on your dreams, just because they take time to come true. The best things in life are worth waiting for.",
    person: "H. Jackson Brown, Jr.",
  },
  {
    quote: "The only place where success comes before work is in the dictionary.",
    person: "Vidal Sassoon",
  },
  {
    quote: "The difference between ordinary and extraordinary is that little extra.",
    person: "Jimmy Johnson",
  },
  {
    quote: "If you want to achieve greatness, stop asking for permission.",
    person: "Kobe Bryant",
  },
];
btn.addEventListener('click',function(){
	let random=Math.floor(Math.random()*quotes.length);
	quote.innerText=quotes[random].quote;
	person.innerText=quotes[random].person;
})
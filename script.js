function generate(){
  let quotes = {
     "- Harry Styles" : '"It\'s a family show!... or is it?"',
     "- Harrold Styles" : '"Tina, She\'s GAY!"',
     "- Harriet Styles" : '"I\'d walk through fire for you, just let me adore you... OKAY!"',
     "- HS" : '"To boyfriends everywhere...FUCK YOU"',
     "- Louis\'s boo" : '"I like girls!"',
     "- Sunshine" : '"Sweet creature, sweet creature, when I run out of road, you bring me home, You\'ll bring me home"'
  }
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}

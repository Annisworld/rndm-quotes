function generate(){
  let quotes = {
     "- Sue Murphy" : '"Did you ever walk into a room and forget why you walked in? I think that\'s how dogs spend their lives."',
     "- Devin J. Monroe" : '"The only thing we have to fear is fear itself, but raptors are pretty dang scary."',
     "- Edith Wharton" : '"The only way not to think about money is to have a great deal of it."',
     "- Paula Poundstone" : '"Adults are always asking children what they want to be when they grow up because they\'re looking for ideas."',
     "- Phyllis Diller" : '"I want my children to have all the things I couldn’t afford. Then I want to move in with them."',
     "- Anonymous" : '"Friends are God\'s way of apologizing to us for our families."'
  }
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}

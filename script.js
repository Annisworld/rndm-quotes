function generate(){
  let quotes = {
     "- Sue Murphy" : '"Did you ever walk into a room and forget why you walked in? I think that\'s how dogs spend their lives."',
     "- Devin J. Monroe" : '"The only thing we have to fear is fear itself, but raptors are pretty dang scary."',
     "- Edith Wharton" : '"The only way not to think about money is to have a great deal of it."',
     "- Paula Poundstone" : '"Adults are always asking children what they want to be when they grow up because they\'re looking for ideas."',
     "- Phyllis Diller" : '"I want my children to have all the things I couldn’t afford. Then I want to move in with them."',
     "- Anonymous" : '"Friends are God\'s way of apologizing to us for our families."'
     "- Jack Handey" : '"Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes."'
     "- Les Dawson" : '"I used to sell furniture for a living. The trouble was, it was my own."'
     "- Oscar Wilde" : '"The best way to appreciate your job is to imagine yourself without one."'
     "- Mark Twain" : '"Clothes make the man. Naked people have little or no influence in society."'
     "- Jimmy Kimmel" : '"I never feel more alone than when I\'m trying to put sunscreen on my back."'
  }
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}

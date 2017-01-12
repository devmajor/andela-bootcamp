function wordCount(text) {
  var total = 0;
  for (var i = 0; i < text.length; i++)
    if (text(i) === " ") { // if a space is found in str
      total = +1; // add 1 to total so far
  }
  total+= 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}
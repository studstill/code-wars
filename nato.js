var nato = (function() {
  var letters =  {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"
  }
  return function(word) {
    var wordArray = word.toLowerCase();
    wordArray = word.split("");

    for (var i = 0; i < wordArray.length; i++) {
        var currentWord = wordsArray[i];
        if (letters.hasOwnProptery(wordArray[i]) {
          currentWord = letters[currentWord];
        }
        wordsArray[i] = currentWord;
    }
  }
})();

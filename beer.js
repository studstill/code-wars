// code is broken

var lyrics = [];
var sing = function (words) {
  // return the lyrics as a string ...
  var lyrics = words;
  for (i = 99, j = 0; i > -1 || i !== 'no more'; i--, j++) {
    var verseIndex = j * 2;

    if (i == 0) {
      i = 'no more';
    }

    lyrics[verseIndex] = i + ' bottles of beer on the wall, ' + i + ' bottles of beer.';

    if (i == 2) {
      lyrics[verseIndex + 1] = 'Take one down and pass it around, ' + (i - 1) + ' bottle of beer on the wall.';

    } else if (i == 1) {
      lyrics[verseIndex + 1] = 'Go to the store and buy some more, 99 bottles of beer on the wall.';

    } else {
      lyrics[verseIndex + 1] = 'Take one down and pass it around, '+ (i - 1) + ' bottles of beer on the wall.';
    }
  }
  return lyrics;
};

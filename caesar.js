function caesar(string, key) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const cypherLetter = (letterIndex) => {
    if (letterIndex + key < alphabet.length) {
      cypher += alphabet[letterIndex + key];
    } else if (letterIndex + key > alphabet.length) {
      cypher += alphabet[letterIndex + key - alphabet.length];
    }
  };

  let cypher = "";

  const inputSplit = string.toUpperCase().split("");

  inputSplit.forEach((letter) => {
    letterIndex = alphabet.findIndex(
      (alphabetLetter) => alphabetLetter === letter
    );
    cypherLetter(letterIndex);
  });

  return cypher;
}

module.exports = caesar;

// shuffles the characters in a string.
const shuffleString = (word: string): string => {
  const characters = word.split('');

  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;
  }

  return characters.join('');
};

export default (word: string) => {
  const words = word.split(' ');
  const shuffledWords = words.map((w) => {
    return shuffleString(w);
  });

  return shuffledWords.join(' ');
};

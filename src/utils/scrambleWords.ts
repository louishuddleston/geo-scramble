import dateSeededRandom from './dateSeededRandom';

// shuffles the characters in a string.
const shuffleString = (word: string, dateSeeded?: boolean): string => {
  const characters = word.split('');

  for (let i = characters.length - 1; i > 0; i--) {
    const j = dateSeeded ? dateSeededRandom(i) : Math.floor(Math.random() * i);
    const temp = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;
  }

  return characters.join('');
};

export default (word: string, dateSeeded?: boolean) => {
  const words = word.split(' ');
  const shuffledWords = words.map((w) => {
    return shuffleString(w, dateSeeded);
  });

  return shuffledWords.join(' ');
};

export interface GameState {
  countryCode: string;
  landmarkName: string;
  scrambledLandmarkName: string;
  status: 'correct' | 'incorrect' | 'active';
  guesses: string[];
}

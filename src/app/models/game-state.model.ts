export interface GameState {
  countryCode: string;
  landmarkName: string;
  description: string;
  scrambledLandmarkName: string;
  status: 'correct' | 'incorrect' | 'active';
  guesses: string[];
}

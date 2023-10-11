type CountryCode = string;

interface GameDataOption {
  countryCode: CountryCode;
  landmarkName: string;
}

interface CountryInfo {
  [key: CountryCode]: {
    countryName: string;
    flagImage: string;
    mapImage: string;
  };
}

const getMapImagePath = (countryCode: CountryCode) =>
  `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${countryCode}/vector.svg`;

export const countryInfo: CountryInfo = {
  us: {
    countryName: 'United States',
    flagImage: '',
    mapImage: getMapImagePath('us'),
  },
  gb: {
    countryName: 'Great Britain',
    flagImage: '',
    mapImage: getMapImagePath('gb'),
  },
  fr: {
    countryName: 'France',
    flagImage: '',
    mapImage: getMapImagePath('fr'),
  },
  de: {
    countryName: 'Germany',
    flagImage: '',
    mapImage: getMapImagePath('de'),
  },
  es: {
    countryName: 'Spain',
    flagImage: '',
    mapImage: getMapImagePath('es'),
  },
  th: {
    countryName: 'Thailand',
    flagImage: '',
    mapImage: getMapImagePath('th'),
  },
};

export const gameDataOptions: GameDataOption[] = [
  {
    countryCode: 'us',
    landmarkName: 'white house',
  },
  {
    countryCode: 'gb',
    landmarkName: 'stonehenge',
  },
  {
    countryCode: 'fr',
    landmarkName: 'eiffel tower',
  },
  {
    countryCode: 'de',
    landmarkName: 'brandenburg gate',
  },
  {
    countryCode: 'us',
    landmarkName: 'statue of liberty',
  },
  {
    countryCode: 'gb',
    landmarkName: 'big ben',
  },
  {
    countryCode: 'es',
    landmarkName: 'sagrada familia',
  },
  {
    countryCode: 'th',
    landmarkName: 'wat arun',
  },
];

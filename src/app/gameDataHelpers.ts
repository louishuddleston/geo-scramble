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
  it: {
    countryName: 'Italy',
    flagImage: '',
    mapImage: getMapImagePath('it'),
  },
  au: {
    countryName: 'Australia',
    flagImage: '',
    mapImage: getMapImagePath('au'),
  },
  my: {
    countryName: 'Malaysia',
    flagImage: '',
    mapImage: getMapImagePath('my'),
  },
  jp: {
    countryName: 'Japan',
    flagImage: '',
    mapImage: getMapImagePath('jp'),
  },
  za: {
    countryName: 'South Africa',
    flagImage: '',
    mapImage: getMapImagePath('za'),
  },
  in: {
    countryName: 'India',
    flagImage: '',
    mapImage: getMapImagePath('in'),
  },
  mx: {
    countryName: 'Mexico',
    flagImage: '',
    mapImage: getMapImagePath('mx'),
  },
  cn: {
    countryName: 'China',
    flagImage: '',
    mapImage: getMapImagePath('cn'),
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
  {
    countryCode: 'it',
    landmarkName: 'leaning tower of pisa',
  },
  {
    countryCode: 'us',
    landmarkName: 'golden gate bridge',
  },
  {
    countryCode: 'au',
    landmarkName: 'sydney opera house',
  },
  {
    countryCode: 'my',
    landmarkName: 'petronas towers',
  },
  {
    countryCode: 'jp',
    landmarkName: 'mount fuji',
  },
  {
    countryCode: 'za',
    landmarkName: 'table mountain',
  },
  {
    countryCode: 'in',
    landmarkName: 'taj mahal',
  },
  {
    countryCode: 'mx',
    landmarkName: 'chichen itza',
  },
  {
    countryCode: 'cn',
    landmarkName: 'great wall of china',
  },
  {
    countryCode: 'in',
    landmarkName: 'lotus temple',
  },
  {
    countryCode: 'us',
    landmarkName: 'hollywood sign',
  },
  {
    countryCode: 'cn',
    landmarkName: 'forbidden city',
  },
  {
    countryCode: 'mx',
    landmarkName: 'angel of independence',
  },
];

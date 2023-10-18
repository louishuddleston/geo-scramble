type CountryCode = string;

interface GameDataOption {
  countryCode: CountryCode;
  landmarkName: string;
  description: string;
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
  kz: {
    countryName: 'Kazakhstan',
    flagImage: '',
    mapImage: getMapImagePath('kz'),
  },
  rs: {
    countryName: 'Serbia',
    flagImage: '',
    mapImage: getMapImagePath('rs'),
  },
  ru: {
    countryName: 'Russia',
    flagImage: '',
    mapImage: getMapImagePath('ru'),
  },
  br: {
    countryName: 'Brazil',
    flagImage: '',
    mapImage: getMapImagePath('br'),
  },
  ar: {
    countryName: 'Argentina',
    flagImage: '',
    mapImage: getMapImagePath('ar'),
  },
  ma: {
    countryName: 'Morocco',
    flagImage: '',
    mapImage: getMapImagePath('ma'),
  },
};

// TODO: internationalization

export const gameDataOptions: GameDataOption[] = [
  {
    countryCode: 'us',
    landmarkName: 'white house',
    description:
      'The White House is the official residence and workplace of the President of the United States. It is an iconic symbol of American democracy and political leadership.',
  },
  {
    countryCode: 'gb',
    landmarkName: 'stonehenge',
    description:
      'Stonehenge is a prehistoric monument located in Wiltshire, England. It is a ring of standing stones, each around 13 feet high, seven feet wide, and weighing around 25 tons, arranged in a circular pattern.',
  },
  {
    countryCode: 'fr',
    landmarkName: 'eiffel tower',
    description:
      'The Eiffel Tower is a wrought-iron lattice tower located on the Champ de Mars in Paris, France. It is one of the most recognizable structures in the world and a symbol of the city.',
  },
  {
    countryCode: 'de',
    landmarkName: 'brandenburg gate',
    description:
      'The Brandenburg Gate is a neoclassical monument in Berlin, Germany. It is a symbol of peace and unity and has played significant roles in German history.',
  },
  {
    countryCode: 'us',
    landmarkName: 'statue of liberty',
    description:
      'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor. It was a gift from France and symbolizes freedom and democracy.',
  },
  {
    countryCode: 'gb',
    landmarkName: 'big ben',
    description:
      'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, England. It is an iconic symbol of the city.',
  },
  {
    countryCode: 'es',
    landmarkName: 'sagrada familia',
    description:
      'The Sagrada Familia is a large unfinished basilica in Barcelona, Spain, designed by architect Antoni Gaudí. It is a UNESCO World Heritage site and a famous landmark.',
  },
  {
    countryCode: 'th',
    landmarkName: 'wat arun',
    description:
      'Wat Arun, also known as the Temple of Dawn, is a Buddhist temple in Bangkok, Thailand. It is known for its stunning architecture and riverside location.',
  },
  {
    countryCode: 'it',
    landmarkName: 'leaning tower of pisa',
    description:
      'The Leaning Tower of Pisa is a freestanding bell tower in Pisa, Italy. Its unintentional tilt is due to unstable foundation soil, making it a famous and unique landmark.',
  },
  {
    countryCode: 'us',
    landmarkName: 'golden gate bridge',
    description:
      'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate Strait, the one-mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean.',
  },
  {
    countryCode: 'au',
    landmarkName: 'sydney opera house',
    description:
      'The Sydney Opera House is a multi-venue performing arts center in Sydney, Australia. It is one of the most distinctive and famous 20th-century buildings.',
  },
  {
    countryCode: 'my',
    landmarkName: 'petronas towers',
    description:
      "The Petronas Towers are twin skyscrapers in Kuala Lumpur, Malaysia. They were the world's tallest buildings from 1998 to 2004 and remain iconic in the cityscape.",
  },
  {
    countryCode: 'jp',
    landmarkName: 'mount fuji',
    description:
      "Mount Fuji is Japan's highest mountain and an active stratovolcano. It is an iconic symbol of Japan and is frequently depicted in art and literature.",
  },
  {
    countryCode: 'za',
    landmarkName: 'table mountain',
    description:
      'Table Mountain is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. It is a popular tourist attraction.',
  },
  {
    countryCode: 'in',
    landmarkName: 'taj mahal',
    description:
      'The Taj Mahal is a white marble mausoleum in Agra, India. It was built by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
  },
  {
    countryCode: 'mx',
    landmarkName: 'chichen itza',
    description:
      'Chichen Itza is a large pre-Columbian archaeological site in Yucatán, Mexico. It is known for its pyramid, El Castillo, and its importance in Mayan history.',
  },
  {
    countryCode: 'cn',
    landmarkName: 'great wall of china',
    description:
      'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, and other materials, generally built along the northern borders of China.',
  },
  {
    countryCode: 'in',
    landmarkName: 'lotus temple',
    description:
      'The Lotus Temple is a Baháʼí House of Worship in Delhi, India. It is known for its flowerlike shape and is open to people of all religious backgrounds.',
  },
  {
    countryCode: 'us',
    landmarkName: 'hollywood sign',
    description:
      'The Hollywood Sign is a famous landmark in the Hollywood Hills of Los Angeles, California. It is an iconic symbol of the entertainment industry.',
  },
  {
    countryCode: 'cn',
    landmarkName: 'forbidden city',
    description:
      'The Forbidden City is a palace complex in Beijing, China. It served as the imperial palace from the Ming Dynasty to the end of the Qing Dynasty.',
  },
  {
    countryCode: 'mx',
    landmarkName: 'angel of independence',
    description:
      'The Angel of Independence is a victory column on Paseo de la Reforma in Mexico City, Mexico. It is one of the most important landmarks in the city.',
  },
  {
    countryCode: 'kz',
    landmarkName: 'bayterek tower',
    description:
      'Bayterek is a monument and observation tower in Nur-Sultan, Kazakhstan. It represents a Kazakh legend and is a symbol of the city.',
  },
  {
    countryCode: 'rs',
    landmarkName: 'temple of saint sava',
    description:
      'The Temple of Saint Sava is a Serbian Orthodox church in Belgrade, Serbia. It is one of the largest Orthodox churches in the world.',
  },
  {
    countryCode: 'ru',
    landmarkName: 'saint basil cathedral',
    description:
      "Saint Basil's Cathedral is a church in Red Square in Moscow, Russia. It is known for its colorful domes and is a UNESCO World Heritage site.",
  },
  {
    countryCode: 'br',
    landmarkName: 'christ the redeemer',
    description:
      'Christ the Redeemer is a colossal statue of Jesus Christ in Rio de Janeiro, Brazil. It is one of the New Seven Wonders of the World.',
  },
  {
    countryCode: 'ar',
    landmarkName: 'obelisk of buenos aires',
    description:
      'The Obelisk of Buenos Aires is a national historic monument and icon of Buenos Aires, Argentina. It stands in the center of the city.',
  },
  {
    countryCode: 'ma',
    landmarkName: 'jemaa el-fnaa',
    description:
      'Jemaa el-Fnaa is a square and market in Marrakesh, Morocco. It is a vibrant and lively place known for its street performances and market stalls.',
  },
];

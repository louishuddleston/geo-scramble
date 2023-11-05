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
  kh: {
    countryName: 'Cambodia',
    flagImage: '',
    mapImage: getMapImagePath('kh'),
  },
  pe: {
    countryName: 'Peru',
    flagImage: '',
    mapImage: getMapImagePath('pr'),
  },
  eg: {
    countryName: 'Egypt',
    flagImage: '',
    mapImage: getMapImagePath('eg'),
  },
  gr: {
    countryName: 'Greece',
    flagImage: '',
    mapImage: getMapImagePath('gr'),
  },
  jo: {
    countryName: 'Jordan',
    flagImage: '',
    mapImage: getMapImagePath('jo'),
  },
  vn: {
    countryName: 'Vietnam',
    flagImage: '',
    mapImage: getMapImagePath('vn'),
  },
  ca: {
    countryName: 'Canada',
    flagImage: '',
    mapImage: getMapImagePath('ca'),
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
    landmarkName: 'hassan ii mosque',
    description:
      "The Hassan II Mosque is a mosque in Casablanca, Morocco. It is the largest functioning mosque in Africa and is the 14th largest in the world. Its minaret is the world's second tallest minaret at 210 metres.",
  },
  {
    countryCode: 'it',
    landmarkName: 'colosseum',
    description:
      'The Colosseum is an oval amphitheater in Rome, Italy. It is the largest ancient amphitheater ever built and is considered one of the greatest works of Roman architecture and engineering.',
  },
  {
    countryCode: 'kh',
    landmarkName: 'angkor wat',
    description:
      'Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world. It was originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire.',
  },
  {
    countryCode: 'gb',
    landmarkName: 'london eye',
    description:
      'The London Eye is a giant Ferris wheel on the South Bank of the River Thames in London, England. It is Europe’s tallest Ferris wheel and the most popular paid tourist attraction in the United Kingdom.',
  },
  {
    countryCode: 'us',
    landmarkName: 'mount rushmore',
    description:
      'Mount Rushmore National Memorial is a sculpture carved into the granite face of Mount Rushmore near Keystone, South Dakota. It features 60-foot sculptures of the heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln.',
  },
  {
    countryCode: 'us',
    landmarkName: 'seattle space needle',
    description:
      'The Space Needle is an observation tower in Seattle, Washington. It is a symbol of Seattle and is a popular tourist attraction.',
  },
  {
    countryCode: 'pe',
    landmarkName: 'machu picchu',
    description:
      'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. It is an iconic symbol of the Incan Empire and a UNESCO World Heritage site.',
  },
  {
    countryCode: 'eg',
    landmarkName: 'pyramids of giza',
    description:
      'The Pyramids of Giza are ancient monuments in Cairo, Egypt. They are the only remaining Wonder of the Ancient World.',
  },
  {
    countryCode: 'gr',
    landmarkName: 'acropolis',
    description:
      'The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens, Greece. It is a UNESCO World Heritage site and contains several ancient buildings of great architectural and historic significance.',
  },
  {
    countryCode: 'jo',
    landmarkName: 'petra',
    description:
      'Petra is a historical and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system.',
  },
  {
    countryCode: 'vn',
    landmarkName: 'ha long bay',
    description:
      'Ha Long Bay is a UNESCO World Heritage Site and popular travel destination in Quảng Ninh Province, Vietnam. It features thousands of limestone karsts and isles in various shapes and sizes.',
  },
  {
    countryCode: 'ca',
    landmarkName: 'cn tower',
    description:
      'The CN Tower is a 553.3 m-high concrete communications and observation tower in Toronto, Ontario, Canada. It is a symbol of the city and a popular tourist attraction.',
  },
  {
    countryCode: 'ae',
    landmarkName: 'burj khalifa',
    description:
      'The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the tallest structure and building in the world and is a symbol of Dubai.',
  },
  {
    countryCode: 'au',
    landmarkName: 'great barrier reef',
    description:
      'The Great Barrier Reef is the world’s largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres.',
  },
  {
    countryCode: 'au',
    landmarkName: 'uluru',
    description:
      'Uluru, also known as Ayers Rock, is a large sandstone rock formation in the southern part of the Northern Territory in central Australia. It is a sacred site for the Aboriginal people of Australia.',
  },
  {
    countryCode: 'us',
    landmarkName: 'grand canyon',
    description:
      'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona. It is one of the Seven Natural Wonders of the World and is a popular tourist destination.',
  },
  {
    countryCode: 'gb',
    landmarkName: 'buckingham palace',
    description:
      'Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. It is a popular tourist attraction and a symbol of the British monarchy.',
  },
  {
    countryCode: 'es',
    landmarkName: 'alhambra',
    description:
      'The Alhambra is a palace and fortress complex located in Granada, Spain. It is a UNESCO World Heritage site and a popular tourist attraction.',
  },
  {
    countryCode: 'it',
    landmarkName: 'trevi fountain',
    description:
      'The Trevi Fountain is a fountain in the Trevi district in Rome, Italy. It is the largest Baroque fountain in the city and one of the most famous fountains in the world.',
  },
];

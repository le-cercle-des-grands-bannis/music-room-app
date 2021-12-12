export const colors = {
  black: 'black',
  gray: 'gray',
  white: 'white',
  yellow: '#f9c17b',
  purpleDark: '#b8adff',
  pink: '#f38fe4',
  red: '#f03c56',
  blue: '#90e8f2',
  purpleLight: '#d697ff',
};

export const fonts = {
  openSans: 'OpenSans-Regular',
  openSansSemiBold: 'OpenSans-SemiBold',
  openSansBold: 'OpenSans-Bold',
  openSansExtraBold: 'OpenSans-ExtraBold',
  futuraBTBold: 'FuturaBT-Bold',
  futuraBTBook: 'FuturaBT-Book',
  futuraBTHeavy: 'FuturaBT-Heavy',
  futuraBTLight: 'FuturaBT-Light',
  futuraBTMedium: 'FuturaBT-Medium',
  photoBook: {
    abrilFatface: {
      regular: 'AbrilFatface-Regular',
    },
    comicNeue: {
      regular: 'ComicNeue-Regular',
      bold: 'ComicNeue-Bold',
      italic: 'ComicNeue-Italic',
      boldItalic: 'ComicNeue-BoldItalic',
    },
    damion: {
      regular: 'Damion',
    },
    italianno: {
      regular: 'Italianno-Regular',
    },
    libreBaskerville: {
      regular: 'LibreBaskerville-Regular',
      bold: 'LibreBaskerville-Bold',
      italic: 'LibreBaskerville-Italic',
    },
    lobsterTwo: {
      regular: 'LobsterTwo',
      bold: 'LobsterTwo-Bold',
      italic: 'LobsterTwo-Italic',
      boldItalic: 'LobsterTwo-BoldItalic',
    },
    montserrat: {
      regular: 'Montserrat-Regular',
      bold: 'Montserrat-Bold',
      italic: 'Montserrat-Italic',
      boldItalic: 'Montserrat-BoldItalic',
    },
    nanumBrushScript: {
      regular: 'NanumBrush',
    },
    parisienne: {
      regular: 'Parisienne-Regular',
    },
    quicksand: {
      regular: 'Quicksand',
      bold: 'Quicksand-Bold',
    },
    reenieBeanie: {
      regular: 'ReenieBeanie',
    },
    roboto: {
      regular: 'Roboto-Regular',
      bold: 'Roboto-Bold',
      italic: 'Roboto-Italic',
      boldItalic: 'Roboto-BoldItalic',
    },
  },
};

const {
  abrilFatface,
  comicNeue,
  damion,
  italianno,
  libreBaskerville,
  lobsterTwo,
  montserrat,
  nanumBrushScript,
  parisienne,
  quicksand,
  reenieBeanie,
  roboto,
} = fonts.photoBook;

export const orderedPhotoBookFontsList = [
  {name: abrilFatface, key: 'AbrilFatFace'},
  {name: comicNeue, key: 'ComicNeue'},
  {name: damion, key: 'Damion'},
  {name: italianno, key: 'Italianno'},
  {name: libreBaskerville, key: 'LibreBaskerville'},
  {name: lobsterTwo, key: 'LobsterTwo'},
  {name: montserrat, key: 'Montserrat'},
  {name: nanumBrushScript, key: 'NanumBrushScript'},
  {name: parisienne, key: 'Parisienne'},
  {name: quicksand, key: 'Quicksand'},
  {name: reenieBeanie, key: 'ReenieBeanie'},
  {name: roboto, key: 'Roboto'},
];

export const viewSizes = {
  quarter: '25%',
  middle: '50%',
  threeQuarter: '75%',
  full: '100%',
};

export const fontSizes = {
  small: 12,
  medium: 14,
  large: 16,
  extraLarge: 20,
  xxl: 22,
};

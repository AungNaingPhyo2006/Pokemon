
// <=================Start Here=======================>

export interface  BaseColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  red: string;
  text: string;
  border: string;
  notification: string;
  button: string;
  box: string;
  signInBtn: string;
  gradientHeader: string[];
  gradientBody: string[];
  borderBottomColor: string;
  modalBg: string;
  modalCard: string;
  toast: string;
  tomatoToast: string;
  success: string;
  successText: string;
  warning: string;
  warningText: string;
  buttonTxt:string;
}

export interface DarkTheme {
  colors: BaseColors;
}

export interface LightTheme {
  colors: BaseColors;
}

export const dark : DarkTheme = {
  colors: {
    primary: '#000000',
    secondary: '#92929b', //#7F7F7F
    background: '#09090A',
    card: '#1d1d21',
    red: '#e50914',
    text: '#ffffff',//'#f3f3ff',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    button: '#FFFFFF',
    box: '#0c0c0e',
    signInBtn: '#121212',
    gradientHeader: [
      'rgba(0, 0, 0, 1)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0)',
    ],
    gradientBody: ['rgba(0, 0, 0, 0.7)', 'rgba(9, 9, 10, 1)'],
    borderBottomColor: 'rgba(255, 255, 255,0.1)',
    modalBg: '#1d1d21',
    modalCard: '#0c0c0e',
    toast: '#fff',
    tomatoToast: '#E50914',
    success: '#1e322c',
    successText: '#47e291',
    warning: '#342c23',
    warningText: '#e9ac4a',
    buttonTxt : '#99DC64',
  },
};

export const light : LightTheme = {
  colors: {
    primary: '#FFFFFF',
    background: '#FFFFFF', //"#F3F3FF",
    card: '#E4E4E4',
    red: '#e50914',
    text: '#09090A',
    border: 'rgb(0, 0, 0)',
    notification: 'rgb(255, 69, 58)',
    secondary: '#92929b',
    button: '#222222',
    signInBtn: '#E4E4E4',
    box: '#0c0c0e',
    gradientHeader: [
      'rgba(255, 255, 255, 0.8)',
      'rgba(255, 255, 255, 0.1)',
      'rgba(243,243,255,0)',
    ],
    gradientBody: ['rgba(255, 255, 255, 0.5)', 'rgba(243,243,255,1)'],
    borderBottomColor: 'rgba(0, 0, 0 ,0.1)',
    modalBg: '#ffffff',
    modalCard: '#E4E4E4',
    toast: '#E4E4E4',
    tomatoToast: '#92929b',
    success: '#1e322c',
    successText: '#47e291',
    warning: '#342c23',
    warningText: '#e9ac4a',
    buttonTxt : '#99DC64',

  },
};


export const FontSize = {
  //Font Size
  primaryHeader: '2rem', //32
  secondaryHeaderLoginStack: '1.563rem', //25
  secondaryHeaderHomeStack: '1.375rem', //22
  primaryText: '0.938rem', //15
  secondaryText: '0.813rem', //13
  descText: '0.75rem', //12
  buttonText: '1.25rem', //20
  pickerText: '1.063rem', //17
  ErrorMessageText: '0.625rem', //10
  noteText: '0.688rem', //11
  secondaryTitle: '1.125rem', //18
  title: '1.563rem', //25 px
  button: '1.313rem', //21 px
  headLine: '2rem',
  inputText: '0.938rem', //15 px
  menuTitle: '1.375rem', //22 px
  menuItem: '1rem', //16 px
  successAndLogoText: '1.625rem', //26 px
  secondarySuccessTest: '1.063rem', //17px
};

export const APPColors = {
  EPColor: '#FBB03B',
  EPbackgroundColor: 'rgba(251, 176, 59,0.15)',
  AlbumColor: '#92929b',
  AlbumBackgroundColor: 'rgba(146, 146, 155,0.15)',
  SingleColor: '#e25a68',
  SingleBackgroundColor: 'rgba(226, 90, 104,0.15)',
};
interface Theme {
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  primaryColor: string;
  secondaryColor: string;
  errorColor: string;
}


const themes: Theme[] = [
  {
    backgroundColor: '#222',
    primaryTextColor: '#999999',
    secondaryTextColor: '#000000',
    primaryColor: '#04d361',
    secondaryColor: '#3a3a3a',
    errorColor: '#880000'
  },
  {
    backgroundColor: '#eeeeee',
    primaryTextColor: '#000000',
    secondaryTextColor: '#ffffff',
    primaryColor: '#04d361',
    secondaryColor: '#3a3a3a',
    errorColor: '#880000'
  }
];


export const getTheme = (): Theme => {
  return themes[0];
}

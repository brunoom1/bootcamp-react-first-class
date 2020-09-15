interface Theme {
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  primaryColor: string;
  secondaryColor: string;
}


const themes: Theme[] = [
  {
    backgroundColor: '#eeeeee',
    primaryTextColor: '#000000',
    secondaryTextColor: '#ffffff',
    primaryColor: '#04d361',
    secondaryColor: '#3a3a3a'
  }
];


export const getTheme = (): Theme => {
  return themes[0];
}

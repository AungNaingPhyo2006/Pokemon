export const TabScreens = {
    Home : 'HOME_SCREEN',
    Account : 'ACCOUNT_SCREEN',
    MyPokemon : 'MYPOKEMON_SCREEN'
 } as const;
 
 export type TabScreenValue = typeof TabScreens[keyof typeof TabScreens]



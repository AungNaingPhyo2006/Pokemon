import {useColorScheme} from 'react-native';
import {AppStore} from 'constants/zustand';
import { dark, light } from 'constants/APPTheme';
import { useShallow } from 'zustand/react/shallow';

function useTheme() {
  let isDarkTheme;

  
  let isDark = (val : any) => {
    console.log('Val===>', val);
    isDarkTheme =  val == 'dark' ? true : false
    return val == 'dark' ? dark : light;
  };
  const {userTableTheme} = AppStore(useShallow(
    state => ({
      userTableTheme: state.userTableTheme,
    }),
  ));
  const colorScheme = useColorScheme();
  console.log('COlor', colorScheme);

  let theme =
    userTableTheme === 'SystemTheme'
      ? isDark(colorScheme)
      : isDark(userTableTheme);

  return {theme,isDarkTheme}; //theme == 'dark' ? dark : light
}

export default useTheme;

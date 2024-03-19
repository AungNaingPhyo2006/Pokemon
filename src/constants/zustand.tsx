import {create,} from 'zustand';
import {persist, devtools, createJSONStorage} from 'zustand/middleware';

type AppActions = {
  lang: string;
  userTableTheme :  string;
  appFirstTimeLaunched: boolean;
  sound: boolean;
  vibration: boolean;
  _hasHydrated?: boolean;
  setHasHydrated: (state: boolean) => void;
  setUserTableTheme: (state: string) => void;
  setLang: (val: string) => void;
  setAppFirstTimeLaunched: (val: boolean) => void;
  setSound: (val: boolean) => void;
  setVibration: (val: boolean) => void;
}

const useStore = create  (
  devtools(
    persist <AppActions>(
      (set, get) => ({
        lang: 'en',
        userTableTheme: 'SystemTheme' ,
        appFirstTimeLaunched: true,
        sound: true,
        vibration: true,

        setHasHydrated: state => {
          set({
            _hasHydrated: state,
          });
        },

        setLang: (val) => set((state) => ({lang: state.lang = val})),
        setUserTableTheme: val => set({userTableTheme: val}),
        setAppFirstTimeLaunched: (val) => set((state) => ({appFirstTimeLaunched: state.appFirstTimeLaunched = val})),
        setSound: (val) => set((state) => ({sound: state.sound = val})),
        setVibration: (val) => set((state) => ({vibration: state.vibration = val}))
      }),
      
        
      {
        name: 'ev-storage', // unique name
        onRehydrateStorage: (state) => {
            console.log('hydration start')
        
            return (state, error) => {
                if(error){
                    console.log('hydration error =>', error)
                }else{
                    console.log('hydration finished')
                }
            }
        }
      },
    ),
  ),
);

export const AppStore = useStore;
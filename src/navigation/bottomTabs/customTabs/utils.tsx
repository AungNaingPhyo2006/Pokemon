import { TabScreenValue } from "./types";

type BottomTabRouteMap = Record<TabScreenValue,string>
const bottomTabBarRoutesMap : BottomTabRouteMap =  {
    HOME_SCREEN : 'Home',
    ACCOUNT_SCREEN : 'Account',
    MYPOKEMON_SCREEN : 'MyPokemon'
}

export const toBottomBarRouteName = (
    screen : TabScreenValue,
    routesMap : Partial <BottomTabRouteMap> = bottomTabBarRoutesMap,
) => routesMap[screen] ?? '' ;
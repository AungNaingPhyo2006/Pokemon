import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import type { BottomTabBarProps as ReactNavigationBottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarItem from './TabBarItem';
import { toBottomBarRouteName } from './utils';
import { TabScreenValue } from './types';
import TabBarIndicator from './TabBarIndicator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import * as LucideIcons from 'lucide-react-native';

const { width } = Dimensions.get('window');
type BottomTabBarProps = ReactNavigationBottomTabBarProps;

const BottomTabBar = ({ state: { routeNames, index : selectedTab }, navigation }: BottomTabBarProps) => 
{
    const tabWidth = width / routeNames.length;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(tabWidth * selectedTab) }],
  }));
  const { bottom } = useSafeAreaInsets();

//   <====Custom Icon for bottom Tabs=====>
  const iconMapping: { [key: string]: keyof typeof LucideIcons } = {
    HOME_SCREEN: "Home",
    ACCOUNT_SCREEN: "User",
    MYPOKEMON_SCREEN : "Search",
  };
//   console.warn('routename=>', routeNames)
return (
 <>
 <TabBarIndicator tabCount={routeNames.length}  animatedStyle={animatedStyle}/>
 <View style={styles.tabsContainer}>
    {routeNames.map((routeName, index) => (
    <TabBarItem
    key={routeName}
    title={toBottomBarRouteName(routeName as TabScreenValue)}
    isSelected={selectedTab === index}
    onPress={() => navigation.navigate(routeName)}
    iconName={iconMapping[routeName]}
  />
 
   ))}
  </View>
  </>
)};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabsContainer: { flexDirection: 'row' ,},
});
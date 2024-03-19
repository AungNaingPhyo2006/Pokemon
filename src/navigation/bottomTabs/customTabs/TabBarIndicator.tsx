import React from 'react';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');

type TabBarIndicatorProps = {
  tabCount: number;
  animatedStyle: StyleProp<ViewStyle>;
  height?: number;
  color?: string;
};

const TabBarIndicator = ({
  tabCount,
  height = 2,
  color = 'blue',
  animatedStyle,
}: TabBarIndicatorProps) => (
  <Animated.View
    style={[
      {
        height,
        width: width / tabCount,
        backgroundColor: color,
        borderRadius: height / 2,
      },
      animatedStyle,
    ]}
  />
);

export default TabBarIndicator;
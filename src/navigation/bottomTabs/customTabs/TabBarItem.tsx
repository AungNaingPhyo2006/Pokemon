import { Home } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import * as LucideIcons from 'lucide-react-native';
import { useTheme } from '@react-navigation/native';

type TabBarItemProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  iconName: keyof typeof LucideIcons; // Dynamic icon name
};
 

const TabBarItem = ({ title, isSelected, onPress,iconName }: TabBarItemProps) => 
{

const {colors} = useTheme()
const IconComponent = LucideIcons[iconName];
return (
  <Pressable style={styles.container} onPress={onPress}>
    <IconComponent size={24} color={'blue'}/>
    <Text style={[{color:colors.text}, isSelected && styles.selected]}>{title}</Text>
  </Pressable>
)};

export default TabBarItem;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingVertical: 16 ,},
  selected: { fontWeight: '700',color:'blue'},
});
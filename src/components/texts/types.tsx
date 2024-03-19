import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

 export interface TextProps {
    // style?: TextStyle;
    style? :  StyleProp<TextStyle>;
    children: ReactNode;
  } 
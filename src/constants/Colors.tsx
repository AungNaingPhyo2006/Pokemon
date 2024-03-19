export const colors = {
    primary : "#495DCF",
    secondary : "#F2F1F9",
    black : "#0F172A",
    white: "#FFFFFF",
    gray:"#64748B",
    accent :"#047857",
    btnBg: "#4A5ECE"
}

  // <=======New ColorTheme=======>
  export type ColorTheme = {
    primary: string;
    secondary: string;
    textSecondary: string;
    textPrimary: string;
  };

  const commonColor = {
   colors : {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
  }
};
  
  type commonColor = typeof commonColor;
  export type TColors = ColorTheme & commonColor;

  const light : TColors = {
    primary: '#080811',
    secondary: '#161629',
    textPrimary: commonColor.colors.commonWhite,
    textSecondary: '#67686E',
    ...commonColor,
  };
  
  const dark : TColors = {
    primary: '#080811',
    secondary: '#161629',
    textPrimary: commonColor.colors.commonBlack,
    textSecondary: '#67686E',
    ...commonColor,
  };
  
  export default { light, dark };

import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
    inputStyle: {
      padding: 20,
        backgroundColor: COLORS.light_gray_bg,
        borderWidth: 1,
        borderColor: COLORS.light_gray,
        borderRadius: 10,
        marginTop: 5,
    },
    label:{
      ...FONTS.urbanist_bold,
      fontSize: 12,
      color: COLORS.blue,
      marginLeft:10
    },
  });
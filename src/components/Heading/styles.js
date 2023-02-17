import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
    title:{
        ...FONTS.arial_rounded_bold,
        fontSize:24,
        color:COLORS.primary,
        alignSelf:'center',
        marginVertical:10
    },

  });
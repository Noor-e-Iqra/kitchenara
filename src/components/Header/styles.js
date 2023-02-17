import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical:10
    },
    title:{
        ...FONTS.arial_rounded_bold,
        fontSize:24,
        color:COLORS.primary
    },
    icon:{
        position:'absolute',
        left:10,
        padding:5,

    }
  });
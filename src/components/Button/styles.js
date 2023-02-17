import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
    large_container: {
      height: 58,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      borderRadius: 20,
      marginTop: 25,
    },
   large_title:{
      ...FONTS.arial_rounded_bold,
      fontSize: 16,
      color: COLORS.secondary,
    },
    small_container: {
      paddingHorizontal: 20,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      borderRadius: 20,
    },
   small_title:{
    ...FONTS.urbanist_semiBold,
    fontSize: 14,
    color: COLORS.secondary,
    },
    outline_container: {
      paddingHorizontal: 15,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: COLORS.primary,
      borderRadius: 20,
      borderWidth: 1,
      marginTop: 10,
    },
   outline_title:{
    ...FONTS.arial_rounded_bold,
    fontSize: 14,
    color: COLORS.primary,
    },
  });
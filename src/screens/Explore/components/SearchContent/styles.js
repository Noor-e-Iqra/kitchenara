import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../theme';

export const styles = StyleSheet.create({
  category_container: {
    paddingVertical: 9,
    paddingHorizontal: 22,
    borderWidth: 1.8,
    borderColor: COLORS.primary,
    borderRadius: 30,
  },

  category_txt: {
    ...FONTS.urbanist_bold,
    fontSize: 18,
  },
  results: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 16,
    color: COLORS.light_blue,
    marginTop: 15,
    marginBottom: 10,
  },
});

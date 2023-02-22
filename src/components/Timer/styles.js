import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
  regular: {
    ...FONTS.urbanist_regular,
    fontSize: 16,
  },
  bold: {
    ...FONTS.urbanist_semiBold,
    fontSize: 18,
    color: COLORS.primary,
  },
});

import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    ...FONTS.arial_rounded,
    fontSize: 14,
  },
  value: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    color: COLORS.primary,
  },
});

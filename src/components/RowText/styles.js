import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  label:{
    ...FONTS.arial_rounded,
    fontSize: 16,
    color: COLORS.light_gray2,
  },
  value:{
    ...FONTS.arial_rounded,
    fontSize: 16,
    color: COLORS.light_black,
  }
});

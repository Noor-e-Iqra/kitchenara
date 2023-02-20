import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  text: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    color: COLORS.light_gray,
    textAlign: 'center',
    width: '65%',
  },

});

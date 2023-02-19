import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 145,
    width: 110,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  name: {
    ...FONTS.arial_rounded_bold,
    fontSize: 11,
    marginTop: 10,
  },
});

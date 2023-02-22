import {StyleSheet} from 'react-native';
import {COLORS, FONTS,SIZES} from '../../theme';

export const styles = StyleSheet.create({
  back_arrow_con: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    ...FONTS.arial_rounded_bold,
    fontSize: 18,
  },
  desc: {
    ...FONTS.source_sans_pro_regular,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5,
  },
  price: {
    ...FONTS.arial_rounded_bold,
    fontSize: 22,
  },
  add_on: {
    ...FONTS.source_sans_pro_regular,
    fontSize: 14,
    color: COLORS.black,
    marginTop: 24,
  },
  btn: {
    position: 'absolute',
    bottom: SIZES.padding + 10,
    left: SIZES.padding,
    right: SIZES.padding,
  },
});

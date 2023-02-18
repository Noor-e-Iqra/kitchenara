import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
  outline_con: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 35,
    position: 'absolute',
    top: '55%',
    left: 15,
    right: 15,
    borderColor: COLORS.primary,
  },
  papa_jones: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 16,
  },
  pizza: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 12,
    color: COLORS.light_gray_txt,
  },
  delivery: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 12,
    color: COLORS.blue,
  },
  labelStyle: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  indicator: {
    height: 2,
    backgroundColor: COLORS.light_blue,
  },
});

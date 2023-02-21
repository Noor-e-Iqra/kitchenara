import {StyleSheet} from 'react-native';
import { tabBarHeight } from '../../navigation/tabBarHeight';
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
  name: {
    ...FONTS.arial_rounded_bold,
    fontSize: 18,
  },
  country: {
    ...FONTS.arial_rounded,
    fontSize: 14,
    color: COLORS.blue,
    marginTop: 5,
    marginBottom: 2,
  },
  desc: {
    ...FONTS.arial_rounded,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.light_gray2,
  },
  labelStyle: {
    ...FONTS.arial_rounded_bold,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  indicator: {
    height: 2,
    backgroundColor: COLORS.primary,
  },
  icon_outlined:{
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.primary,
  },
  flatlist:{
    margin: 20,
    alignSelf: 'center',
    paddingBottom:tabBarHeight
  },
});

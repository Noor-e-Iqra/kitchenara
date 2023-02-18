import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.light_gray,
  },
  shop_name: {
    ...FONTS.arial_rounded_bold,
    fontSize:16
  },
  items: {
    ...FONTS.source_sans_pro_regular,
    fontSize:14,
    color:COLORS.light_gray_txt,
    marginVertical:2
  },
  add_on: {
    ...FONTS.arial_rounded_bold,
    fontSize:18,
    color:COLORS.primary
  },
  qty: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize:16,
    marginHorizontal:8
  },
});

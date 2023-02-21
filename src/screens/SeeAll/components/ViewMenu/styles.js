import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.light_gray,
  },
  shop_name: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize:16
  },
  category: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 13,
    color:COLORS.light_gray_txt
  },
  delivery: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 13,
    color:COLORS.light_blue,
    marginRight:5
  },
});

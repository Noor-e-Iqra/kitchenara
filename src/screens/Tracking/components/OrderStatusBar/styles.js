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
    ...FONTS.source_sans_pro_semiBold,
  },
  status: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 15,
    color: COLORS.blue,
  },
  date: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 12,
    color: COLORS.blue,
  },
});

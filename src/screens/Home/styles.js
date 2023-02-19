import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shop_name: {
    ...FONTS.source_sans_pro_semiBold,
  },
  items: {
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 12,
  },
  add_on: {
    ...FONTS.source_sans_pro_regular,
    fontSize: 12,
  },
  social_text: {
    ...FONTS.arial_rounded_bold,
    marginVertical: 3,
    color: COLORS.secondary,
    fontSize: 15
  },
  social_icon: {
    width: 24,
    height: 24
  },
  profile_username: {
    ...FONTS.arial_rounded_bold,
    color: COLORS.secondary,
    fontSize: 18,
    lineHeight: 21.6
  },
  profile_profession: {
    ...FONTS.arial_rounded,
    color: COLORS.secondary,
    fontSize: 14,
    letterSpacing: 0.2,
  },
  item_posted: {
    ...FONTS.arial_rounded_bold,
    color: COLORS.secondary,
    fontSize: 12,
    letterSpacing: 0.2,
  }
});

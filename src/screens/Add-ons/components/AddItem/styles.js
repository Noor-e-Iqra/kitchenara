import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  name: {
    ...FONTS.arial_rounded_bold,
    fontSize:14
  },
  price: {
    ...FONTS.source_sans_pro_regular,
    fontSize:12,
    marginTop:1
  },
});

import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  search_con: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: COLORS.input_bg,
    borderRadius: 10,
    borderWidth:1,
    width: '85%',
    justifyContent: 'space-between',
  },
  search_input: {
    ...FONTS.urbanist_regular,
    fontSize: 14,
    width: '88%',
  },
  filter: {
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#F43F5E1A',
    borderRadius: 10,
    justifyContent: 'center',
  },
});

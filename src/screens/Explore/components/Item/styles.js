import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  extraComponentContainer: {
    // fakes overflow but requires more markup
    paddingTop: 10,
    position: 'relative',
  },
  container: {
    height: 180,
    width: 145,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    margin: 7,
    marginTop:0,
    position: 'relative',
  },
  name: {
    ...FONTS.arial_rounded_bold,
    fontSize: 14,
    marginTop: 10,
  },
  res: {
    height: 35,
    width: 35,
    position: 'absolute',
    top: 0,
    left: 10,
  },
});

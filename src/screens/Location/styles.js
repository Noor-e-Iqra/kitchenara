import {Platform, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  location_input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical:Platform.OS=='ios'? 10:0,
    margin: SIZES.padding,
    marginTop: Platform.OS == 'ios' ? 60 : undefined,
    borderRadius: 18,
    borderColor: COLORS.primary,
  },
  location_btn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 60,
    position: 'absolute',
    bottom: SIZES.padding * 4,
    right: SIZES.padding,
  },
});

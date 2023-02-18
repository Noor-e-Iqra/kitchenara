import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
  disabled_container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 1,
  },
  enabled_container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 1,
  },
});

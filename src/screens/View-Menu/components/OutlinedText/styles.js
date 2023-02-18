import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal:5,
    paddingVertical:2,
    borderWidth:1,
    borderColor:'#E5384ECC',
    borderRadius:5,
    alignSelf: 'flex-start' 
  },
  label:{
    ...FONTS.source_sans_pro_semiBold,
    fontSize: 10,
    color: '#E5384ECC',
  },
});
